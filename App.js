import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import FeedScreen from './src/screens/FeedScreen';
import UploadScreen from './src/screens/UploadScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const MainStackNavigator = createBottomTabNavigator(
  {
    Feed: { screen: FeedScreen },
    Upload: { screen: UploadScreen },
    Profile: { screen: ProfileScreen }
  }
)

const MainStack = createAppContainer(MainStackNavigator)

export default class App extends React.Component {
  render() {
    return (
      <MainStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
