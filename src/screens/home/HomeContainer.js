import React from 'react';
import nodejs from 'nodejs-mobile-react-native';
import HomeScreen from './HomeScreen';
import {createInspection} from '../../modelAction/inspection';
import {loadInspection} from '../../services/loadinspection';
import {database} from '../../database';

class HomeContainer extends React.Component {
  componentDidMount() {
    nodejs.start('loadInspections.js');
    nodejs.channel.addListener('message', inspections => {}, this);
  }

  onLoadDataFromWorkerPress = () => {
    nodejs.channel.send('starting fetch API data');
  };

  onLoadDataFromMainThreadrPress = async () => {
    try {
      const inspections = await loadInspection();
      await database.action(async () => {
        inspections.forEach(inspection => {
          const batchInspections = createInspection(inspection);
          database.batch(batchInspections);
        });
      });

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
