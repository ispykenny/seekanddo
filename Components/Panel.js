import React, {useEffect} from 'react';
import {Animated, View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import Inner from './Inner';
const Panel = ({setPanelView, panelShowing, setLoggedInState}) => {

 
  const closeModal = () => {
    console.log('here', panelShowing)
    setPanelView(false)
  }

  const LogTheUserOut = () => {
    console.log('hereeee', panelShowing)
    setLoggedInState(false)
    setPanelView(false)
    panelParentStyles();
  }
  //
  const panelParentStyles = () => {
    console.log(panelShowing, 'hereee')
    if(panelShowing) {
      return {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 8,
        right: 0,
        transform: [{translateX: '0%'}]
      }
    } else {
      return {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        zIndex: 8,
        right: 0,
        transform: [{translateX: Dimensions.get('window').width}]
      }
    }
  }


  return (
    <View style={panelParentStyles()}>
      <Inner>
        <Text style={{color: 'black', marginTop: 100}} onPress={closeModal}>Close</Text>
      </Inner>
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