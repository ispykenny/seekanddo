import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
const Panel = ({setPanelView, panelShowing, setLoggedInState}) => {

 
  const closeModal = () => {
    console.log('here', panelShowing)
    setPanelView(true)
  }

  const LogTheUserOut = () => {
    console.log('hereeee', panelShowing)
    setLoggedInState(false)
    setPanelView(true)
    panelParentStyles();
  }
  //
  const panelParentStyles = () => {
    console.log(panelShowing, 'hereee')
    if(!panelShowing) {
      return {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        zIndex: 8,
        right: 0,
        transform: [{translateX: '0%'}]
      }
    } else {
      return {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        zIndex: 8,
        right: 0,
        transform: [{translateX: Dimensions.get('window').width}]
      }
    }
  }


  return (
    <View style={panelParentStyles()}>
      <Text style={{color: 'white', marginTop: 100}} onPress={closeModal}>Close</Text>
      <View style={styles.buttonParent}>
        <Button onPress={LogTheUserOut} title="Log out" style={styles.button}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    zIndex: 8,
    right: 0,
    transform: [{translateX: Dimensions.get('window').width}]
  },
  buttonParent: {
    position: 'absolute',
    bottom: 70,
    width: '100%'

  }
})

export default Panel;