# Restriction Module

Purpose: Provides the typed model and a service to retrieve `bb_restriction` records from CRM and map them to a friendly domain shape.

Files

- [Restriction.ts](Restriction.ts) — domain model (`RestrictionModel`) and any helpers.
- [index.ts](index.ts) — exports the fetch service (e.g. `fetchRestrictionsFor`).

Usage

1. Import the service:

```ts
import { fetchRestrictionsFor } from '../Restriction';
import { EvaluationType } from '../types';

const restrictions = await fetchRestrictionsFor('account', EvaluationType.Airports);
```

2. Each returned item is a typed `RestrictionModel` with `attributeName`, `isRequired`, and `isVisible`.

Notes

- Keep `Restriction` column/field names in `types.ts` as the single source of truth so fetch queries and mappings stay consistent.
