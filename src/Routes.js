import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
// import the different screens
import SignUp from './SignUp'
import NavBarView from './partial/Navbar'
import Login from './Login'
import Loading from './Loading'
// create our app's navigation stack
const Routes = createStackNavigator(
  {
    NavBar: {
      screen: NavBarView,
      navigationOptions: {
        header: null
      }
    },
    Login,
    SignUp
  },
  {
    initialRouteName: 'Login'
  },
)
export default Routes;