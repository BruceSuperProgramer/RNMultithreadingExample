import React from 'react';
import realm from '../../persistors/realm/realm';
import {loadInspection} from '../../services/loadinspection';
import HomeScreen from './HomeScreen';
import {
  createInspections,
  createInspection,
} from '../../persistors/realm/services/inspection';

class HomeContainer extends React.Component {
  componentDidMount() {
    console.log('realm.path:', realm.path);
  }

  onLoadDataFromMainThreadrPress = async () => {
    try {
      const inspections = await loadInspection();
      // NOTE Batch insertion
      createInspections(inspections);

      // NOTE without delay
      // inspections.forEach(inspection => createInspection(inspection));

      // NOTE with delay
      // let offset = 500;
      // inspections.forEach(async (inspection, index) => {
      //   setTimeout(() => {
      //     createInspection(inspection);
      //   }, index * offset);
      // });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <HomeScreen
        onLoadDataFromMainThreadrPress={this.onLoadDataFromMainThreadrPress}
      />
    );
  }
}

export default HomeContainer;
