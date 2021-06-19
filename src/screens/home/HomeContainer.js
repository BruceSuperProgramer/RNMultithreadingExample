import React from 'react';
import realm from '../../persistors/realm/realm';
import nodejs from 'nodejs-mobile-react-native';
import {loadInspection} from '../../services/loadinspection';
import HomeScreen from './HomeScreen';
import {createInspection} from '../../persistors/realm/services/inspection';

class HomeContainer extends React.Component {
  componentDidMount() {
    console.log('realm.path:', realm.path);
    nodejs.start('loadInspections.js');
    nodejs.channel.addListener('message', result => {
      
    }, this);
  }

  onLoadDataFromWorkerPress = () => {
    nodejs.channel.send('starting fetch API data');
  };

  onLoadDataFromMainThreadrPress = async () => {
    const result = await loadInspection();
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
