import realm from '../realm';

export const createInspection = inspection => {
  realm.write(() => {
    aliceCat = realm.create('Inspection', {
      id: inspection.id,
      description: inspection.description,
      inspectionType: JSON.stringify(inspection.inspectionType),
      humanReferenceString: inspection.humanReferenceString,
      project: JSON.stringify(inspection.project),
      inspectionDate: inspection.inspectionDate,
      dateCompleted: inspection.dateCompleted,
      isAdhoc: inspection.isAdhoc,
      isCompleted: inspection.isCompleted,
      isDeleted: inspection.isDeleted,
      adhocUser: inspection.adhocUser
        ? JSON.stringify(inspection.adhocUser)
        : '',
      walkCreatedByUser: inspection.walkCreatedByUser
        ? JSON.stringify(inspection.walkCreatedByUser)
        : '',
      location: inspection.location ? JSON.stringify(inspection.location) : '',
      employer: inspection.employer ? JSON.stringify(inspection.employer) : '',
      lastModifiedDate: inspection.lastModifiedDate,
      clientModifiedDate: inspection.clientModifiedDate,
      raisedIssueCount: inspection.raisedIssueCount,
      openIssueCount: inspection.openIssueCount,
      closedIssueCount: inspection.closedIssueCount,
    });
  });
};
