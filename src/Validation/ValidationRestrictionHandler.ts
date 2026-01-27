import { EvaluationType } from '../types';
import { fetchRestrictionsFor, Restriction } from '../Restriction';

export function ValidationRestrictionHandler(context: Xrm.Events.EventContext): void {
    const formContext = context.getFormContext();

    const entityName = formContext.data.entity.getEntityName();
    const evalTypeAttr = formContext.getAttribute(
        'bb_evaluationtype'
    ) as Xrm.Attributes.OptionSetAttribute;

    const evalType = evalTypeAttr ? (evalTypeAttr.getValue() as EvaluationType) : null;
    if (!evalType) {
        console.warn(
            'ValidationRestrictionHandler',
            'Evaluation Type attribute not found or has no value.'
        );
        return;
    }

    const restrictions = fetchRestrictionsFor(entityName, evalType);

    restrictions
        .then((result: Restriction[]) => {
            console.debug(
                'ValidationRestrictionHandler',
                `Retrieved ${result.length} restrictions`
            );
            result.forEach((restriction) => {
                const attribute = formContext.getAttribute(restriction.bb_attribute);

                if (attribute) {
                    attribute.setRequiredLevel(
                        restriction.bb_isrequired ? 'required' : 'none'
                    );
                    attribute.controls.get(0).setVisible(restriction.bb_isvisible);
                }
            });
        })
        .catch((error) => {
            console.error(
                'ValidationRestrictionHandler',
                'Error retrieving restrictions',
                error
            );
        });
}
