import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const LogUserOut = ({setLoggedInState}) => {
  const logUserOutOfHere = () => {
    setLoggedInState(false)
  }
  return (
    <View>
      <Text style={{color: 'white'}} onPress={logUserOutOfHere}>
        Log Out
      </Text>
    </View>
  )
}

export default LogUserOut;