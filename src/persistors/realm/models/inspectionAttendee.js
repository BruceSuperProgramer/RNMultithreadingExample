import {SYNCED_STATUS, CREATED_SOURCE} from '../constants';
export const INSPECTION_ATTENDEE_SCHEMA = 'InspectionAttendee';

export const InspectionAttendeeSchema = {
  name: INSPECTION_ATTENDEE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    serverId: 'string?',
    name: 'string?',
    position: 'string?',
    companyName: 'string?',
    email: 'string?',
    user: 'User?',
    isRecipientOnly: {type: 'bool', default: false},
    syncedStatus: {
      type: 'string',
      default: SYNCED_STATUS.SYNCED,
      indexed: true,
    },
    signatureFile: 'File?',
    actionId: 'string?',
    createSource: {
      type: 'string?',
      default: CREATED_SOURCE.DOWNLOAD,
    },
  },
};

let InspectionAttendeeModel = class {
  constructor(
    id,
    serverId,
    name,
    position,
    companyName,
    email,
    user,
    isRecipientOnly,
    syncedStatus,
  ) {
    this.id = id;
    this.serverId = serverId;
    this.name = name;
    this.position = position;
    this.companyName = companyName;
    this.email = email;
    this.user = user;
    this.isRecipientOnly = isRecipientOnly;
    this.syncedStatus = syncedStatus;
  }
};

export default InspectionAttendeeModel;
