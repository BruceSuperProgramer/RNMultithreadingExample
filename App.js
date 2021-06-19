import React from 'react';
import {Button, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import nodejs from 'nodejs-mobile-react-native';

class App extends React.Component {
  componentDidMount() {
    nodejs.start('loadInspections.js');
    nodejs.channel.addListener(
      'message',
      msg => {
        alert(msg);
      },
      this,
    );
  }

  render() {
    const isDarkMode = true;
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{flex: 1}}>
          <View>
            <Button
              title="Load Data"
              onPress={() => nodejs.channel.send('starting fetch API data')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
