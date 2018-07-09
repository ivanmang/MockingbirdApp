// Import a library to help create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Mocking'} />
    <AlbumList />
  </View>
);

//render  it to the device
AppRegistry.registerComponent('mockingbird', () => App);
