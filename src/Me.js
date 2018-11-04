import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TextInput, Alert } from 'react-native'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Loading extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly  icon={<Ionicons name='ios-add' size={15} color='#fff'/>}
        rightComponent={<Ionicons onPress={() => { Alert.alert('You tapped the button!'); }} name='ios-add' size={30} color='white' />}
        leftComponent={<Ionicons onPress={() => { Alert.alert('You tapped the button!'); }} name='ios-contact' size={30} color='white' />}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
        <View style={styles.container}>
          <Image
            style={{width: 150, height: 150, borderRadius: 75}}
            source={require('../assets/user2.jpg')}
          />
          <Text style={{fontSize: 16}}>Name</Text>
          <TextInput style={{fontSize: 30}}>T</TextInput>
          <Button
            onPress={() => this.props.navigation.navigate('Friends')} 
            title="Add friend"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})