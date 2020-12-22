import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import Inner from './Inner';
import SettingsIcon from '../Assets/Settings';
const Nav = ({setShowSettings, showingSettings}) => {

  const changePanelView = () => {
    setShowSettings(!showingSettings)
  }

  return (
    <View style={styles.navParent}>
      <Inner>
        <View style={styles.nav}>
          <View>
            <Text style={{color: 'black', textAlign: 'left', fontWeight: '800', fontSize: 24}}>Seekando</Text>
          </View>
          <TouchableHighlight underlayColor="#f5f5f5" onPress={changePanelView}>
            <View>
              <SettingsIcon/>
            </View>
          </TouchableHighlight>
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
  },

  nav: {
    paddingVertical: 10,
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
