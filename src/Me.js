import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TextInput } from 'react-native'

export default class Loading extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
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