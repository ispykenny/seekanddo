import React from 'react';
import {
  View,
  Text,
  StyleSheet
}
from 'react-native';
import Inner from '../Components/Inner'

const LoggedOut = ({setLoggedInState}) => {

  const updateState = () => {
    setLoggedInState(true)
  }

  return (
    <View>
      <Inner>
        <Text style={styles.button} onPress={updateState}>Logged In</Text>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white'
  }
})

export default LoggedOut