import {SYNCED_STATUS, CREATED_SOURCE} from '../constants';
export const INSPECTION_CHECKLISTS_SCHEMA = 'InspectionChecklists';

export const InspectionChecklistsSchema = {
  name: INSPECTION_CHECKLISTS_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    serverId: 'string?',
    name: 'string?',
    dateAddedToWalk: 'date?',
    checklistTypeId: 'string?',
    answers: 'string?',
    location: 'string?',
    actionId: 'string?',
    syncedStatus: {type: 'string', default: SYNCED_STATUS.SYNCED},
    createSource: {
      type: 'string?',
      default: CREATED_SOURCE.DOWNLOAD,
    },
  },
};

let InspectionChecklistsModel = class {
  constructor(
    id,
    serverId,
    name,
    dateAddedToWalk,
    checklistTypeId,
    answers,
    location,
    actionId,
    syncedStatus,
    createSource,
  ) {
    this.id = id;
    this.serverId = serverId;
    this.name = name;
    this.dateAddedToWalk = dateAddedToWalk;
    this.checklistTypeId = checklistTypeId;
    this.answers = answers;
    this.location = location;
    this.actionId = actionId;
    this.syncedStatus = syncedStatus;
    this.createSource = createSource;
  }
};

export default InspectionChecklistsModel;
