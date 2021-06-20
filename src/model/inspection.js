import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Inspection extends Model {
  static table = 'Inspection';

  @field('referenceNumber') referenceNumber;
  @field('project') project;
  @field('equipmentInduction') equipmentInduction;
}
