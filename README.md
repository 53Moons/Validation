# Validation
<h2> Dataverse Web API Examples (blake/ZTL) </h2>
<h3>Retrieve Records</h3>

```ts
// Get current record data
const recordId = formContext.data.entity.getId();
const entityName = formContext.data.entity.getEntityName();

const record = await Xrm.WebApi.retrieveRecord(
    entityName,
    recordId,
    '?$select=name,telephone1'
);
```
<h3>Create Records</h3>

```ts
const newContact = {
    firstname: 'John',
    lastname: 'Doe',
    emailaddress1: 'john.doe@example.com'
};

const result = await Xrm.WebApi.createRecord('contact', newContact);

```
<h3>Update Records</h3>

```ts
const updateData = {
    telephone1: '555-0123'
};

await Xrm.WebApi.updateRecord(entityName, recordId, updateData);

```
