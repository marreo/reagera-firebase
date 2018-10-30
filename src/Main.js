import React from 'react'
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native'
import firebase from 'react-native-firebase'
import FooterNav from './partial/Footer'

export default class Main extends React.Component {
  state = { currentUser: null }
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Login'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
render() {
    const { currentUser } = this.state
return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text>Hej?</Text>
        </View>
      </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})