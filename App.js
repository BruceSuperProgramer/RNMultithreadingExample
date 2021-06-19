/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import nodejs from 'nodejs-mobile-react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

class App extends React.Component {
  componentDidMount() {
    nodejs.start('loadNews.js');
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
