import { createBottomTabNavigator } from "react-navigation"
import MeView from "../Me"
import FriendsView from "../Friends"

export default createBottomTabNavigator({
  Me: MeView,
  Friends: FriendsView,
});