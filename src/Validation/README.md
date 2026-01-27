# Validation Module

Purpose: Contains the form handler that applies `Restriction` results to a form's fields (visibility and required level).

Files

- [ValidationRestrictionHandler.ts](ValidationRestrictionHandler.ts) — the main exported handler to wire into form events.
- [index.ts](index.ts) — re-exports the handler for easy imports.

How to wire

1. Add `ValidationRestrictionHandler` to the form OnLoad (or attribute OnChange) in your CRM form properties.

Example (webresource function):

```ts
import { ValidationRestrictionHandler } from './Validation';

export function onLoad(context: Xrm.Events.EventContext) {
    ValidationRestrictionHandler(context);
}
```

2. The handler expects the form to have an `bb_evaluationtype` option set attribute and will fetch restrictions for the current entity and evaluation type.

Notes

- The handler uses the `Restriction` service to retrieve typed restriction objects and then applies `setRequiredLevel` and `setVisible` on the matching attributes.
