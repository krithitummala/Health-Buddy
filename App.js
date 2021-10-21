import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen'
import ExercisesScreen from './screens/ExercisesScreen'
import EyesScreen from './screens/EyesScreen'
import HipsScreen from './screens/HipsScreen'
import NeckScreen from './screens/NeckScreen'
import HandsScreen from './screens/HandsScreen'
import RegenerationScreen from './screens/RegenerationScreen'
import RiddlesScreen from './screens/RiddlesScreen'
import MessagesScreen from './screens/MessagesScreen'
import MusicScreen from './screens/MusicScreen'
import VideosScreen from './screens/VideosScreen'
import {AppTabNavigator} from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component{
render(){
  return(
    <View style = {styles.container}>
     <AppContainer/>
    </View>
  )
}
}
const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
  ExercisesScreen : {screen : ExercisesScreen},
  EyesScreen : {screen : EyesScreen},
  HipsScreen : {screen : HipsScreen},
  HandsScreen : {screen : HandsScreen},
  NeckScreen : {screen : HandsScreen},
  RegenerationScreen : {screen : RegenerationScreen},
  RiddlesScreen : {screen : RiddlesScreen},
  MessagesScreen : {screen : MessagesScreen},
  MusicScreen : {screen : MusicScreen},
  VideosScreen : {screen : VideosScreen}
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
})
