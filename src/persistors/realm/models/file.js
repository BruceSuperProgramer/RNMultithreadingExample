import Moment from 'moment-timezone';

export const FILE_SCHEMA = 'File';

export const FileSchema = {
  name: FILE_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'string',
    projectId: 'string?',
    name: 'string',
    path: 'string',
    type: 'string?',
    uri: 'string?',
    canvasPath: 'string?',
    canvasPreviewPath: 'string?',
    size: 'string?',
    source: 'data?',
    priority: 'string?',
    status: 'string?',
    accessedAt: 'date?',
    modifiedAt: 'date?',
    createdAt: 'date?',
    actionId: 'string?',
  },
};

const priority = {
  High: 'High',
  Medium: 'Medium',
  Low: 'Low',
};

const status = {
  Synced: 'Synced',
  Created: 'Created',
  Syncing: 'Syncing',
  Error: 'Error',
};

let FileModel = class {
  constructor(
    fileId,
    fileName,
    filePath,
    fileType,
    canvasPath,
    acionId,
    uri = null,
  ) {
    this.id = fileId;
    this.name = fileName;
    this.path = filePath;
    this.accessAt = Moment.utc().toDate();
    this.modifiedAt = Moment.utc().toDate();
    this.createdAt = Moment.utc().toDate();
    this.type = null;
    this.uri = uri;
    this.size = null;
    this.source = null;
    this.priority = priority.High;
    this.status = status.Created;
    this.canvasePath = canvasPath;
    this.canvasPreviewPath = null;
    this.actionId = acionId;
  }
};

export default FileModel;
