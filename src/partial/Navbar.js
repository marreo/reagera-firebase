import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from "react-navigation"
import MeView from "../Me"
import FriendsView from "../Friends"
export default createBottomTabNavigator({
      Me: {
        screen: MeView
      },
      Friends: {
        screen: FriendsView
      }
    },
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Me') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Friends') {
        iconName = `ios-contacts${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: '#3D6DCC',
    inactiveTintColor: 'gray',
  },
}
);