# Validation Tool (src)

Purpose: A small TypeScript helper library used by CRM form scripts to fetch and apply field-level restrictions defined in a `bb_restriction` entity.

**Structure**

- **types**: [types.ts](types.ts) — shared enums and column-name constants.
- **Restriction**: [Restriction/Restriction.ts](Restriction/Restriction.ts), [Restriction/index.ts](Restriction/index.ts) — model and service to fetch restrictions.
- **Validation**: [Validation/ValidationRestrictionHandler.ts](Validation/ValidationRestrictionHandler.ts), [Validation/index.ts](Validation/index.ts) — form handler that applies restrictions to fields.

**Usage**

- Call the service `fetchRestrictionsFor(entityName, evaluationType)` from the `Restriction` module to receive typed restriction objects.
- Use `ValidationRestrictionHandler` as an OnLoad or OnChange handler to apply visibility/required rules to form fields.

**Development**

- Build: `pnpm run build`
- Lint / Format: use the repo's configured tools (see root `package.json`).

**Contributing**

- Keep the `Restriction` column-name mappings in `types.ts` as the source of truth.
- Add new entity mappings to the registry in `types.ts` or generate them from CRM metadata for scale.
