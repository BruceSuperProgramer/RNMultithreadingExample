import {Model} from '@nozbe/watermelondb';
import {field, action} from '@nozbe/watermelondb/decorators';

export default class Inspection extends Model {
  static table = 'inspection';

  @field('description') description;
  @field('inspectionType') inspectionType;
  @field('humanReferenceString') humanReferenceString;
  @field('humanReferenceNumber') humanReferenceNumber;
  @field('project') project;
  @field('inspectionDate') inspectionDate;
  @field('dateCompleted') dateCompleted;
  @field('isAdhoc') isAdhoc;
  @field('isCompleted') isCompleted;
  @field('isDeleted') isDeleted;
  @field('adhocUser') adhocUser;
  @field('walkCreatedByUser') walkCreatedByUser;
  @field('location') location;
  @field('employer') employer;
  @field('lastModifiedDate') lastModifiedDate;
  @field('clientModifiedDate') clientModifiedDate;
  @field('lastModifiedDate') lastModifiedDate;
  @field('raisedIssueCount') raisedIssueCount;
  @field('openIssueCount') openIssueCount;
  @field('closedIssueCount') closedIssueCount;

  // // NOTE Batch insertion
  // @action async createInspections(inspection) {
  //   await this.batch(
  //     this.prepareUpdate(post => {
  //       post.title = `7 ways to lose weight`;
  //     }),
  //     this.collections.get('comments').prepareCreate(comment => {
  //       comment.post.set(this);
  //       comment.body = "Don't forget to comment, like, and subscribe!";
  //     }),
  //   );
  // }
}
