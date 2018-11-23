import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import FeedScreen from './src/screens/FeedScreen';
import UploadScreen from './src/screens/UploadScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { f, database, auth } from './src/configs/config'

const mainStackNavigator = createBottomTabNavigator(
  {
    Feed: { screen: FeedScreen },
    Upload: { screen: UploadScreen },
    Profile: { screen: ProfileScreen }
  }
)

const MainStack = createAppContainer(mainStackNavigator)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.login()
  }
  login = async() => {
    // force user to login
    try {
      let user = await auth.signInWithEmailAndPassword('test@gmail.com', 'password');
    } catch(e) {
      console.log(e);
    }
  }
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
