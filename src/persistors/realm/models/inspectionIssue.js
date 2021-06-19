import {SYNCED_STATUS, CREATED_SOURCE} from '../constants';
import {COMMENT_SCHEMA} from './comment';

export const INSPECTION_ISSUE_SCHEMA = 'InspectionIssue';

export const InspectionIssueSchema = {
  name: INSPECTION_ISSUE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    serverId: 'string?',
    project: 'string?',
    description: 'string?',
    issueType: 'string?',
    employer: 'string?',
    responsibleUser: 'string?', //new
    priority: 'string?',
    dueDate: 'date?',
    humanReferenceString: 'string?',
    openIssueCustomFieldForm: 'string?',
    closeIssueCustomFieldForm: 'string?',
    openIssueCustomFieldValues: 'string?',
    closeIssueCustomFieldValues: 'string?',
    isDeleted: {type: 'bool', default: false},
    issueDate: 'date?',
    identifierUser: 'string?', //new
    resolutionDetail: 'string?',
    issueImgs: 'string?', //not existing in issue
    resolveIssueImgs: 'string?',
    location: 'string?',
    issueStatus: 'string?',
    actionId: 'string?',
    inspection: 'string?',
    isPositiveObservation: {type: 'bool', default: true},
    isSuperIntendentRequired: {type: 'bool', default: true},
    superIntendentApprovalId: 'string?',
    superIntendentRejectionId: 'string?',
    comments: {
      type: 'list',
      objectType: COMMENT_SCHEMA,
    },
    isPhotoForFixRequired: {type: 'bool', default: false},
    superIntendentRejectionId: 'string?',
    superIntendentApprovalId: 'string?',
    dateFixApproved: 'date?',
    dateFixedByResponsibleParty: 'date?',
    passBackCount: 'int?',
    employerFunction: 'string?',
    uploadedFixFiles: 'string?',
    inspectionChecklist: 'string?',
    isSubmitted: {type: 'bool', default: false},
    isSynced: {type: 'bool', default: true},
    syncedStatus: {
      type: 'string',
      default: SYNCED_STATUS.SYNCED,
      indexed: true,
    },
    createSource: {
      type: 'string?',
      default: CREATED_SOURCE.DOWNLOAD,
    },
  },
};

let InspectionIssueModel = class {
  constructor(id) {
    this.id = id;
  }
};

export default InspectionIssueModel;
