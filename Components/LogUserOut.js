import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

const LogUserOut = ({setLoggedInState, setPanelView}) => {
  const logUserOutOfHere = () => {
    setLoggedInState(false)
    setPanelView(false)
  }
  return (
    <View style={styles.buttonParent}>
      <Button title="Log out" style={styles.button} onPress={logUserOutOfHere} />
    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red'
  },
  buttonParent: {
    position: 'absolute',
    bottom: 70,
    width: '100%'

  }
})
export default LogUserOut;