import {database} from '../database';

export const createInspection = inspection => {
  'worklet';
  console.log({inspection});
  const inspectionsCollection = database.get('inspection');
  try {
    return inspectionsCollection.prepareCreate(inspectionModel => {
      inspectionModel.description = inspection.description;
      inspectionModel.inspectionType = inspection.inspectionType
        ? JSON.stringify(inspection.inspectionType)
        : '';
      inspectionModel.humanReferenceString = inspection.humanReferenceString;
      inspectionModel.humanReferenceNumber = inspection.humanReferenceNumber;
      inspectionModel.project = JSON.stringify(inspection.project);
      inspectionModel.inspectionDate = inspection.inspectionDate;
      inspectionModel.dateCompleted = inspection.dateCompleted;
      inspectionModel.isAdhoc = inspection.isAdhoc;
      inspectionModel.isCompleted = inspection.isCompleted;
      inspectionModel.isDeleted = inspection.isDeleted;
      inspectionModel.adhocUser = inspection.adhocUser
        ? JSON.stringify(inspection.adhocUser)
        : '';
      inspectionModel.walkCreatedByUser = inspection.walkCreatedByUser
        ? JSON.stringify(inspection.walkCreatedByUser)
        : '';
      inspectionModel.location = inspection.location
        ? JSON.stringify(inspection.location)
        : '';
      inspectionModel.employer = inspection.employer
        ? JSON.stringify(inspection.employer)
        : '';
      inspectionModel.lastModifiedDate = inspection.lastModifiedDate;
      inspectionModel.clientModifiedDate = inspection.clientModifiedDate;
      inspectionModel.raisedIssueCount = inspection.raisedIssueCount;
      inspectionModel.openIssueCount = inspection.openIssueCount;
      inspectionModel.closedIssueCount = inspection.closedIssueCount;
    });
  } catch (e) {
    console.log('createInspection error:', e);
  }
};
