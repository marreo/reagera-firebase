import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TextInput, Alert } from 'react-native'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { List, ListItem } from 'react-native-elements'

export default class Loading extends React.Component {
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
  }

  GetFriendList = async function(){
    var response = await fetch('https://reagera-api.herokuapp.com/api/friend', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: '5bddc17e71f0280015ea90e9'
      })
    })
  
    let message = await response.json();
    this.state.data = message;
    this.setState(message);
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
        <Text style={{fontSize: 20}}>Name</Text>
        <TextInput 
          style={{
            fontSize: 30, 
            alignSelf: 'center', 
            textAlign: 'center',
            minWidth: 90
          }} 
          placeholder="Name">
        </TextInput>

        <Text>My Friends</Text>
        <List containerStyle={{ marginBottom: 20, alignSelf: 'stretch' }}>
          {
            this.state.data.map((l, i) => (
              <ListItem
                roundAvatar
                avatar={require('../assets/user2.jpg')}
                key={i}
                title={l.name}
                subtitle={l.email}
              />
            ))
          }
        </List>
        <Button
          onPress={() => this.GetFriendList()}  
          title="Get Friendlist"/>
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