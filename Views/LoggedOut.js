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
    <View style={styles.home}>
      <Inner>
        <Text style={styles.button} onPress={updateState}>Logged In</Text>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'green',
    height:  '100%',
    width: '100%',
    top: 0, 
    left: 0,
    zIndex: 66
  },  
  button: {
    color: 'black'
  }
})

export default LoggedOut