import React from 'react';
import {Text, SafeAreaView, Pressable, TouchableHighlight} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    const {onLoadDataFromMainThreadrPress} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableHighlight
          style={{
            marginTop: 200,
            width: '90%',
            backgroundColor: 'green',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onLoadDataFromMainThreadrPress}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Load Data via main thread
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            marginTop: 200,
            width: '90%',
            backgroundColor: 'red',
            alignSelf: 'center',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => alert('Hello world...')}>
          <Text
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Test lag
          </Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
