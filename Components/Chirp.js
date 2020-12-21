import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Inner from './Inner';


const Chirp = () => {
  return (
    <View style={styles.menuBar}>
      <Inner>
        <View style={styles.menuParent}>
          <Text>Menu</Text>
        </View>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  menuBar: {
    position: 'absolute',
    left: 0,
    width: '100%',
    bottom:100,
  },

  menuParent: {
    backgroundColor: '#000',
    shadowOffset:{  width: -0,  height: 0,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8
  }
})

export default Chirp