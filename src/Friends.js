import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
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

export default class Loading extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
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