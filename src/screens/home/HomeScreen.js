import React from 'react';
import {Button, SafeAreaView, View} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const {onLoadDataFromMainThreadrPress} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
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
