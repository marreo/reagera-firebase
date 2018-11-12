import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TextInput, Alert, FlatList } from 'react-native'
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
        rightComponent={<Ionicons onPress={() => { this.props.navigation.navigate('NewStatus') }} name='ios-add' size={30} color='white' />}
        leftComponent={<Ionicons onPress={() => { Alert.alert('You tapped the button!'); }} name='ios-contact' size={30} color='white' />}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Image
              style={{width: 150, height: 150, borderRadius: 75}}
              source={require('../assets/user2.jpg')}
            />
            {/* <Text style={{fontSize: 20}}>Name</Text> */}
            <TextInput 
              style={{
                fontSize: 24, 
                alignSelf: 'center', 
                textAlign: 'center',
                minWidth: 90
              }} 
              placeholder="Name">
            </TextInput>

            <Text style={{textAlign: 'center'}}>My Friends</Text>
          </View>
        {/* <List containerStyle={{ marginBottom: 20, alignSelf: 'stretch' }}>
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
        </List> */}
          <FlatList
            style={{alignSelf: 'stretch', flex: 1, flexDirection: 'column'}}
            data={this.state.data}
            keyExtractor= {item => item._v}
            renderItem={
              ({item}) => 
              <View style={{alignSelf: 'stretch', backgroundColor: 'white', padding: 10, flex: 2, flexDirection: 'row', borderBottomWidth: 1}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <Image
                    style={{width: 50, height: 50, borderRadius: 75}}
                    source={require('../assets/user2.jpg')}
                  />
                </View>
                <View style={{
                  flex: 5, 
                  alignContent: 'flex-start', 
                  flexDirection: 'column', 
                  justifyContent: 'center'
                }}>
                  <Text style={{
                    fontSize: 18
                  }}>
                    {item.name}
                  </Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            }
          />
          <Button
            onPress={() => this.GetFriendList()}  
            title="Get Friendlist"/>
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