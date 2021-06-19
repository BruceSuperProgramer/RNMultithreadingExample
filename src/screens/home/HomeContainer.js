import React from 'react';
import realm from '../../persistors/realm/realm';
import nodejs from 'nodejs-mobile-react-native';
import HomeScreen from './HomeScreen';

class HomeContainer extends React.Component {
  componentDidMount() {
    console.log('realm.path:', realm.path);
    nodejs.start('loadInspections.js');
    nodejs.channel.addListener('message', inspections => {}, this);
  }

  onLoadDataFromWorkerPress = () => {
    nodejs.channel.send('starting fetch API data');
  };

  onLoadDataFromMainThreadrPress = async () => {
    try {
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
