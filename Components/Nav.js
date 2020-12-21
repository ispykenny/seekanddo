import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight
} from 'react-native';

import Inner from './Inner';

const Nav = ({loggedInStatus, setPanelView}) => {

  const changePanelView = () => {
    setPanelView(false)
  }

  const UserAvatar = () => {
    if(loggedInStatus) {
      return (
        <TouchableHighlight onPress={changePanelView}>
          <View>
          <ImageBackground style={styles.avatar} source={{uri: `https://avatars3.githubusercontent.com/u/15894356?s=460&u=118ce796d5f3016317cbe6da7e6ebed39d641cd1&v=4`}}> 
          </ImageBackground>
        </View>
        </TouchableHighlight>
      )
    } else {
      return (
        <Text></Text>
      )
    }
  }

  return (
    <View style={styles.navParent}>
      <Inner>
        <View style={styles.nav}>
          <View>
            <Text style={{color: 'black', textAlign: 'left', fontWeight: '800', fontSize: 24}}>Seekando</Text>
          </View>
          <UserAvatar/>
        </View>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  navParent: {
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    zIndex: 999,
    backgroundColor: 'rgba(255,255,255, 0.3)'
  },

  nav: {
    paddingVertical: 20,
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'space-between'
  },

  avatar: {
    width: 30,
    borderRadius: 100,
    height: 30,
    overflow: 'hidden',
    resizeMode: 'cover'
  }
});

export default Nav;
