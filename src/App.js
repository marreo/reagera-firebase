import React from 'react'
import Routes from './Routes'
import { View, StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
// create our app's navigation stack
const App = () => (
  <View style={{ flex: 1 }}>
    <Routes />
  </View>
);

export default App; 