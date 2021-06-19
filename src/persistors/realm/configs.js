import {InspectionSchema} from './models/inspection';
import {InspectionIssueSchema} from './models/inspectionIssue';
import {InspectionAttendeeSchema} from './models/inspectionAttendee';
import {InspectionChecklistsSchema} from './models/inspectionChecklists';
import {CommentSchema} from './models/comment';
import {UserSchema} from './models/user';
import {FileSchema} from './models/file';

export const connectionString = 'MultiThreadApp.realm';

export const databaseOptions = {
  path: connectionString,
  schema: [
    InspectionSchema,
    InspectionIssueSchema,
    InspectionAttendeeSchema,
    InspectionChecklistsSchema,
    CommentSchema,
    UserSchema,
    FileSchema,
  ],
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true,
};
