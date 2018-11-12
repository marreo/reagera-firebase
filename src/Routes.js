import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native-elements'
import SignUp from './SignUp'
import NavBarView from './partial/Navbar'
import Login from './Login'
import NewStatusView from './NewStatus'
const Routes = createStackNavigator(
  {
    NavBar: {
      screen: NavBarView,
      navigationOptions: {
        header: null
      }
    },
    NewStatus: {
      screen: NewStatusView,
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


// navigationOptions: {
//   headerLeft: null,
//   headerTitle: 'Hej?',
//   headerRight: (
//     <Button icon={<Ionicons name='ios-add' size={15} color='green' />}></Button>
//   )
// },
// headerTitleStyle: {
//   color: '#000',
//   zIndex: 1,
//   fontSize: 18,
//   lineHeight: 23
// },
// animationEnabled: true