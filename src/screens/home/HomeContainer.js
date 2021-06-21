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
      database.action(async () => {
        inspections.forEach(inspection => {
          console.log('!!!!!!!!!!!');
          const batchInspections = createInspection(inspection);
          database.batch(batchInspections);
        });
      });
      // const result = await spawnThread(async () => {
      //   'worklet';
      //   console.log('Hello');
      //   console.log('inspections.length:', inspections.length);

      //   try {
      //     database.action(async () => {
      //       'worklet';
      //       inspections.forEach(inspection => {
      //         console.log('!!!!!!!!!!!');
      //         const batchInspections = createInspection(inspection);
      //         database.batch(batchInspections);
      //       });
      //     });
      //   } catch (e) {
      //     console.log(e);
      //   }

      //   return 0;
      // });

      console.log({result});

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
        onLoadDataFromMainThreadrPress={this.onLoadDataFromMainThreadrPress}
      />
    );
  }
}

export default HomeContainer;
