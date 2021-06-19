import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import realm from '../../persistors/realm/realm';
import nodejs from 'nodejs-mobile-react-native';
import {loadInspection} from '../../services/loadinspection';

class HomeScreen extends React.Component {
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
    const isDarkMode = true;
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{marginTop: 100}}>
          <Button
            title="Load Data via worker"
            onPress={() => nodejs.channel.send('starting fetch API data')}
          />
        </View>

        <View style={{marginTop: 200}}>
          <Button
            title="Load Data via main thread"
            onPress={() => loadInspection()}
          />
        </View>

        <View style={{marginTop: 200}}>
          <Button title="Test lag" onPress={() => alert('Hello world...')} />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
