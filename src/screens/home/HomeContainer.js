import React from 'react';
import realm from '../../persistors/realm/realm';
import nodejs from 'nodejs-mobile-react-native';
import HomeScreen from './HomeScreen';

class HomeContainer extends React.Component {
  componentDidMount() {
    nodejs.start('loadInspections.js');
    nodejs.channel.addListener(
      'message',
      msg => {
        alert(msg);
      },
      this,
    );

    console.log('realm.path:', realm.path);
  }

  render() {
    return <HomeScreen />;
  }
}

export default HomeContainer;
