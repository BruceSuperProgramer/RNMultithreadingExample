import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'inspection',
      columns: [
        // {name: 'id', type: 'string', isOptional: true},
        {name: 'referenceNumber', type: 'string', isOptional: true},
        {name: 'project', type: 'string', isOptional: true},
        {name: 'equipmentInduction', type: 'string', isOptional: true},
        {name: 'permit', type: 'string', isOptional: true},
        {name: 'description', type: 'string', isOptional: true},
        {name: 'inspectionType', type: 'string', isOptional: true},
        {name: 'location', type: 'string', isOptional: true},
        {name: 'status', type: 'string', isOptional: true},
        {name: 'createdBy', type: 'string', isOptional: true},
        {name: 'dateCreated', type: 'number', isOptional: true},
        {name: 'openIssuesCount', type: 'number', isOptional: true},
        {name: 'isAdhoc', type: 'boolean', isOptional: true},
        {name: 'isCompleted', type: 'boolean', isOptional: true},
        {name: 'isDeleted', type: 'boolean', isOptional: true},
        {name: 'createdByUserId', type: 'string', isOptional: true},
        {name: 'isSynced', type: 'boolean', isOptional: true},
        {name: 'employer', type: 'string', isOptional: true},
        {name: 'parentInspection', type: 'string', isOptional: true},
        {name: 'associatedWorkers', type: 'string', isOptional: true},
        {name: 'associatedSwms', type: 'string', isOptional: true},
        {name: 'actionId', type: 'string', isOptional: true},
        {name: 'additionalInformation', type: 'string', isOptional: true},
      ],
    }),
  ],
});
