import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ExercisesScreen from '../screens/ExercisesScreen'
import RegenerationScreen from '../screens/RegenerationScreen'

export const AppTabNavigator = createBottomTabNavigator({
  ExercisesTab : {
    screen : ExercisesScreen,
    tabBarLabel : "Exercises"
  },
  RegenerationTab : {
    screen : RegenerationScreen,
    tabBarLabel : "Regeneration"
  }

})