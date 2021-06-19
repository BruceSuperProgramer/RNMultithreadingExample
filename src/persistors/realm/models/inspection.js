import {INSPECTION_ISSUE_SCHEMA} from './inspectionIssue';
import {INSPECTION_ATTENDEE_SCHEMA} from './inspectionAttendee';
import {INSPECTION_CHECKLISTS_SCHEMA} from './inspectionChecklists';
import {SYNCED_STATUS, CREATED_SOURCE} from '../constants';

export const INSPECTION_SCHEMA = 'Inspection';

export const InspectionSchema = {
  name: INSPECTION_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string', // this is the id synced with server
    serverId: 'string?',
    referenceNumber: 'string?',
    project: 'string?',
    equipmentInduction: 'string?',
    permit: 'string?',
    description: 'string?',
    inspectionType: 'string?',
    location: 'string?',
    status: 'string?',
    createdBy: 'string?',
    dateCreated: 'date?',
    dateServerLastUpdated: 'string?',
    openIssuesCount: 'int?',
    isAdhoc: {type: 'bool', default: false},
    isCompleted: {type: 'bool', default: false},
    isDeleted: {type: 'bool', default: false},
    createdByUserId: 'string?',
    isSynced: {type: 'bool', default: true},
    employer: 'string?',
    parentInspection: 'string?',
    associatedWorkers: 'string?',
    associatedSwms: 'string?',
    inspectionChecklists: {
      type: 'list',
      objectType: INSPECTION_CHECKLISTS_SCHEMA,
    },
    inspectionIssues: {
      type: 'list',
      objectType: INSPECTION_ISSUE_SCHEMA,
    },
    inspectionAttendees: {
      type: 'list',
      objectType: INSPECTION_ATTENDEE_SCHEMA,
    },
    actionId: 'string?',
    syncedStatus: {
      type: 'string',
      default: SYNCED_STATUS.SYNCED,
      indexed: true,
    },
    additionalInformation: 'string?',
    createSource: {
      type: 'string?',
      default: CREATED_SOURCE.DOWNLOAD,
    },
  },
};

let InspectionModel = class {
  constructor(id) {
    this.id = id;
  }
};

export default InspectionModel;
