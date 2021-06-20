import {database} from '../database';

export const createInspection = async inspection => {
  const inspectionsCollection = database.get('inspection');
  try {
    await database.action(async () => {
      await inspectionsCollection.create(inspectionModel => {
        inspectionModel.referenceNumber = inspection.referenceNumber;
        inspectionModel.project = inspection.project;
        inspectionModel.equipmentInduction = inspection.equipmentInduction;
        inspectionModel.permit = inspection.permit;
        inspectionModel.description = inspection.description;
        inspectionModel.inspectionType = inspection.inspectionType;
        inspectionModel.location = inspection.location;
        inspectionModel.status = inspection.status;
        inspectionModel.createdBy = inspection.createdBy;
        inspectionModel.dateCreated = inspection.dateCreated;
        inspectionModel.openIssuesCount = inspection.openIssuesCount;
        inspectionModel.isAdhoc = inspection.isAdhoc;
        inspectionModel.isCompleted = inspection.isCompleted;
        inspectionModel.isDeleted = inspection.isDeleted;
        inspectionModel.isSynced = inspection.isSynced;
        inspectionModel.employer = inspection.employer;
        inspectionModel.parentInspection = inspection.parentInspection;
        inspectionModel.associatedWorkers = inspection.associatedWorkers;
        inspectionModel.associatedSwms = inspection.associatedSwms;
        inspectionModel.actionId = inspection.actionId;
        inspectionModel.additionalInformation =
          inspection.additionalInformation;
      });
    }, `basicInspectionInsertion-for-${inspection.referenceNumber}`);
  } catch (e) {
    console.log('createInspection error:', e);
  }
};
