import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Inspection extends Model {
  static table = 'inspection';

  @field('referenceNumber') referenceNumber;
  @field('project') project;
  @field('equipmentInduction') equipmentInduction;
  @field('permit') permit;
  @field('description') description;
  @field('inspectionType') inspectionType;
  @field('location') location;
  @field('status') status;
  @field('createdBy') createdBy;
  @field('dateCreated') dateCreated;
  @field('openIssuesCount') openIssuesCount;
  @field('isAdhoc') isAdhoc;
  @field('isCompleted') isCompleted;
  @field('isDeleted') isDeleted;
  @field('createdByUserId') createdByUserId;
  @field('isSynced') isSynced;
  @field('employer') employer;
  @field('parentInspection') parentInspection;
  @field('associatedWorkers') associatedWorkers;
  @field('associatedSwms') associatedSwms;
  @field('actionId') actionId;
  @field('additionalInformation') additionalInformation;
}
