import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, Button } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [{
  name: 'Amy Farha',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  subtitle: 'Vice President'
},
{
  name: 'Bmy Farha',
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  subtitle: 'Vice President'
}]

// async function getMoviesFromApi() {
//   try {
//     let response = await fetch('https://reagera-api.herokuapp.com/api/friend', {  
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userid: '5bddc17e71f0280015ea90e9'
//       })
//     });
//     let responseJson = await response.json();
//     console.log(responseJson);
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// }

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
    // var test = getMoviesFromApi();
    var test2 = await fetch('https://reagera-api.herokuapp.com/api/friend', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: '5bddc17e71f0280015ea90e9'
      })
    })

    let message = await test2.json();
    this.state.data = message;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My Friends .</Text>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            list.map((l) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={l.name}
                title={l.name}
              />
            ))
          }
        </List>
        <FlatList
          style={{alignSelf: 'stretch', flex: 1, flexDirection: 'column'}}
          data={this.state.data}
          renderItem={
            ({item}) => 
            <View style={{alignSelf: 'stretch', backgroundColor: 'white', padding: 10, flex: 2, flexDirection: 'row'}}>
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
              </View>
            </View>
          }
        />
        <Button
          onPress={() => this.GetFriendList()} 
          title="Get friends list"/>
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