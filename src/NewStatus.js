import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Header } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Loading extends React.Component {
  state = { status: ''}
  constructor(){
    super();

    this.state = {
      data: []
    }
  }

  handleSubmit = async () => {
    const { status } = this.state
    var response = await fetch('https://reagera-api.herokuapp.com/api/status/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: status,
        userId: '5bddc17e71f0280015ea90e9'
      })
    })
  }

  componentDidMount() {
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        leftComponent={<Ionicons onPress={() => { goBack() }} name='ios-arrow-back' size={30} color='white' />}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
      <FormLabel>Status</FormLabel>
      <FormInput onChangeText={status => this.setState({ status })}></FormInput>
      <FormValidationMessage>Error message?</FormValidationMessage>
      <Button title="Submit" onPress={this.handleSubmit} />
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