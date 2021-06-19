import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/home';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    );
  }
}

export default App;
