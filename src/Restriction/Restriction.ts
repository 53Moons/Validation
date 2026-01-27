import { EvaluationType } from '../types';

export interface Restriction {
    bb_entity: string;
    bb_evaluationtype: EvaluationType;
    bb_attribute: string;
    bb_isrequired: boolean;
    bb_isvisible: boolean;
}

export async function fetchRestrictionsFor(
    entityName: string,
    evalType: EvaluationType
): Promise<Restriction[]> {
    const fetchXml = `
        <fetch>
            <entity name="bb_restriction">
                <filter>
                    <condition attribute="bb_entity" operator="eq" value="${entityName}" />
                    <condition attribute="bb_evaluationtype" operator="eq" value="${evalType}" />
                </filter>
            </entity>
        </fetch>`;
    const response = await Xrm.WebApi.retrieveMultipleRecords(
        'bb_restriction',
        `?fetchXml=${encodeURIComponent(fetchXml)}`
    );
    return response.entities as Restriction[];
}
