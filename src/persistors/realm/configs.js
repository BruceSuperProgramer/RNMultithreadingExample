import {InspectionSchema} from './models/inspection';

export const connectionString = 'MultiThreadApp.realm';

export const key = new Int8Array(64);

export const databaseOptions = {
  path: connectionString,
  schema: [InspectionSchema],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
  // encryptionKey: key,
  // migration: (oldRealm, newRealm) => {
  //   if (oldRealm.schemaVersion < 1) {
  //     const oldObjects = oldRealm.objects(InspectionSchema);
  //     for (let i = 0; i < oldObjects.length; i++) {
  //       oldRealm.delete(oldObjects[i]);
  //     }
  //   }
  // },
};
