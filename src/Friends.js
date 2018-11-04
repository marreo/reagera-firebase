import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, Button } from 'react-native'
import { List, ListItem, Header, Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Loading extends React.Component {
  constructor(){
    super();

    this.state = {
      data: [],
      loading: false,
      loaded: false,
    }
  }

  componentDidMount() {
  }

  GetUserList = async function(){
    this.setState({
      loading: true,
      loaded: true
    })
    
    var response = await fetch('https://reagera-api.herokuapp.com/api/user', {  
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })

    let message = await response.json();
    this.state.data = message;
    this.setState(message);
    this.setState({
      loading: false,
      loaded: true
    })
  }

  pressFriend = async function(id, name) {
    var response = await fetch('https://reagera-api.herokuapp.com/api/friend/create', {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        f1: '5bddc17e71f0280015ea90e9',
        f2: id
      })
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          style={{flex: 9, flexDirection: 'column', alignSelf: 'stretch'}}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Users', style: { color: '#fff', fontSize: 22 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.container}>
        {/* <Text style={{fontSize: 20}}>All users</Text> */}
        <View style={{flex: 9, flexDirection: 'column', alignSelf: 'stretch'}}>
          {this.state.loading &&
              <View style={styles.loading}>
                  <ActivityIndicator color="red" size='large' animating={this.state.loading} />
              </View>
          }
          {this.state.loaded &&
            <List containerStyle={{ marginBottom: 20, alignSelf: 'stretch'}}>
              {
                this.state.data.map((l, i) => (
                  <ListItem
                    roundAvatar
                    avatar={require('../assets/user2.jpg')}
                    key={l._id}
                    title={l.name}
                    subtitle={l.email}
                    onPress={() => this.pressFriend(l._id, l.name)}
                    rightIcon={{ name: 'add', color: '#3D6DCC'}}
                    // rightIcon={<Ionicons name='ios-add' size={30} color='white' />}
                  />
                ))
              }
            </List>
          }
          {/* <FlatList
            style={{alignSelf: 'stretch', flex: 1, flexDirection: 'column'}}
            data={this.state.data}
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
          /> */}
        </View>
        <View style={{flex: 1}}>
          <Button
            onPress={() => this.GetUserList()} 
            title="Get user list"
            disabled={this.state.loading}/>
        </View>
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
  },
  loading: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
})