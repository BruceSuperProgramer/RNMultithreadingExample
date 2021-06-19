import {SYNCED_STATUS} from '../constants';

export const COMMENT_SCHEMA = 'Comment';

export const CommentSchema = {
  name: COMMENT_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    serverId: 'string?',
    dateCreated: 'string?',
    madeByUser: 'string?',
    madeByWorker: 'string?',
    contents: 'string?',
    actionDate: 'string?',
    actionId: 'string?',
    syncedStatus: {
      type: 'string',
      default: SYNCED_STATUS.SYNCED,
      indexed: true,
    },
  },
};

let CommentModel = class {
  constructor(id) {
    this.id = id;
    this.serverId = id;
  }
};

export default CommentModel;
