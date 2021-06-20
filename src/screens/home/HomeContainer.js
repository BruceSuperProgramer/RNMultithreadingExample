import React from 'react';
import HomeScreen from './HomeScreen';
import {createInspection} from '../../modelAction/inspection';
import {loadInspection} from '../../services/loadinspection';
import {database} from '../../database';
import {spawnThread} from 'react-native-multithreading';

class HomeContainer extends React.Component {
  onLoadDataFromMainThreadrPress = async () => {
    try {
      const inspections = await loadInspection();
      await spawnThread(() => {
        'worklet';
        database.action(async () => {
          inspections.forEach(inspection => {
            const batchInspections = createInspection(inspection);
            database.batch(batchInspections);
          });
        });
      });

      // await database.action(async () => {
      //   inspections.forEach(inspection => {
      //     const batchInspections = createInspection(inspection);
      //     database.batch(batchInspections);
      //   });
      // });

      // loadInspection({
      //   callback: async inspections => {
      //     await database.action(async () => {
      //       inspections.forEach(inspection => {
      //         const batchInspections = createInspection(inspection);
      //         database.batch(batchInspections);
      //       });
      //     });
      //   },
      // });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <HomeScreen
        onLoadDataFromWorkerPress={this.onLoadDataFromWorkerPress}
        onLoadDataFromMainThreadrPress={this.onLoadDataFromMainThreadrPress}
      />
    );
  }
}

export default HomeContainer;
