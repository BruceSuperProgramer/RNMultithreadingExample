import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'inspection',
      columns: [
        {name: 'description', type: 'string', isOptional: true},
        {name: 'inspectionType', type: 'string', isOptional: true},
        {name: 'humanReferenceString', type: 'number', isOptional: true},
        {name: 'humanReferenceNumber', type: 'number', isOptional: true},
        {name: 'project', type: 'string', isOptional: true},
        {name: 'inspectionDate', type: 'string', isOptional: true},
        {name: 'dateCompleted', type: 'string', isOptional: true},
        {name: 'isAdhoc', type: 'boolean', isOptional: true},
        {name: 'isCompleted', type: 'boolean', isOptional: true},
        {name: 'isDeleted', type: 'boolean', isOptional: true},
        {name: 'adhocUser', type: 'string', isOptional: true},
        {name: 'walkCreatedByUser', type: 'string', isOptional: true},
        {name: 'location', type: 'string', isOptional: true},
        {name: 'employer', type: 'string', isOptional: true},
        {name: 'lastModifiedDate', type: 'string', isOptional: true},
        {name: 'clientModifiedDate', type: 'string', isOptional: true},
        {name: 'raisedIssueCount', type: 'number', isOptional: true},
        {name: 'openIssueCount', type: 'number', isOptional: true},
        {name: 'closedIssueCount', type: 'number', isOptional: true},
      ],
    }),
  ],
});
