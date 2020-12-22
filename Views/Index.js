import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground
} from 'react-native';

const LogginScreen = ({setLoggedin}) => {
  const updateLoginState = () => {
    setLoggedin(true)
  }
  return (
    <View style={ls.panel}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={ls.background}
        source={{uri:`https://images.pexels.com/photos/3011269/pexels-photo-3011269.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`}}
      >
        <View style={ls.overlay}>
          <View style={ls.content}>
            <Text style={ls.text}>Welcome to Seekanddo</Text>
          </View>
          <View style={ls.button_parent}>
            <Text 
              style={ls.button_primary}
              onPress={updateLoginState}
              >Get Started</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const ls = StyleSheet.create({
  panel: {
    height: '100%',
    width: '100%',
    position: 'relative',
    backgroundColor: 'blue'
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(000,000,000,0.5)'
  },
  content: {
    position: 'absolute',
    top: 200,
    transform: [{translateY: '-50%'}],
    width: '100%',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '700'
  },
  button_parent: {
    marginTop: 90,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    width: '100%',
    justifyContent: 'center'
  },
  button_primary: {
    textAlign: 'center',
    backgroundColor: '#0F71D3',
    width: 200,
    color: 'white',
    overflow: 'hidden',
    borderRadius: 30,
    paddingVertical: 20
    
  }
})

export default LogginScreen;