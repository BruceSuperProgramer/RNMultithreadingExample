export const SYNCED_STATUS = Object.freeze({
  SYNCED: 'synced',
  UPDATED: 'updated',
  CREATED: 'created',
  COMBINED: 'combined',
  QUEUED: 'queued',
  FAILED: 'failed',
});

export const REALM_OFFLINE_METHOD_NAME = {
  CREATE: 'create',
  UPDATE: 'update',
  UPDATE_PUT: 'PUT',
  DELETE: 'DELETE',
};

export const REALM_OFFLINE_READY_TO_PROCESS = {
  YES: 0,
  NO: 1,
  FAILED: -1,
};

//this is for inspection and issue schema
export const CREATED_SOURCE = Object.freeze({
  APP: 'app',
  DOWNLOAD: 'download',
});
