import React from 'react'
import { View, Text, ScrollView, RefreshControl, StyleSheet, Button, Image, TextInput, Alert, FlatList } from 'react-native'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { List, ListItem } from 'react-native-elements'
import moment from 'moment';

export default class Loading extends React.Component {
  constructor(){
    super();

    this.state = {
      refreshing: false,
      statusList: []
    }
  }

  _onRefresh = async () => {
    this.setState({ refreshing: true });
    var response = await fetch('https://reagera-api.herokuapp.com/api/status', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: '5bddc17e71f0280015ea90e9'
      })
    });
    let statuses = await response.json();
    this.state.statusList = statuses;
    this.setState({ refreshing: false });
  }

  timeAgo = (date) => {
    var start = moment(date);
    var end = moment();
    var duration = moment.duration(end.diff(start));
    return Math.ceil(duration.asMinutes());
  }

  componentDidMount() {
    this._onRefresh();
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
          <FlatList
            style={{alignSelf: 'stretch', flex: 1, flexDirection: 'column'}}
            data={this.state.statusList}
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            keyExtractor= {item => item._id}
            renderItem={
              ({item}) => 
              <View style={{alignSelf: 'stretch', borderRadius: 10, backgroundColor: 'white', margin: 5, padding: 10, flex: 1, flexDirection: 'column'}}>
                <View>
                  <Text style={{ fontSize: 10, color: '#333' }}>
                    Posted by {item.user.name}
                  </Text>
                </View>
                <View style={{ marginBottom: 5, marginTop: 5 }}>
                  <Text>
                    {item.text}
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 10, color: '#333' }}>
                    Posted {this.timeAgo(item.posted)} minutes ago
                  </Text>
                </View>
              </View>
            }
          />
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