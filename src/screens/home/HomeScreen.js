import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const isDarkMode = true;
    const {onLoadDataFromWorkerPress, onLoadDataFromMainThreadrPress} =
      this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={{marginTop: 100}}>
          <Button
            title="Load Data via worker"
            onPress={onLoadDataFromWorkerPress}
          />
        </View>

        <View style={{marginTop: 200}}>
          <Button
            title="Load Data via main thread"
            onPress={onLoadDataFromMainThreadrPress}
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
