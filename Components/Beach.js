import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import SunIcon from '../Assets/Sun';
import WaveIcon from '../Assets/Waves';


const Beach = () => {
  return (
    <>
     <View><Text style={{textAlign: 'center', fontWeight: '800', marginBottom: 10}}>Current Conditions:</Text></View>
    <View style={styles.info}>
      <View style={styles.info__item}>
        <View style={styles.icon_parent}>
          <WaveIcon/>
        </View>
        <View>
          <Text style={[styles.textWhite, styles.content]}>4ft waves</Text>
        </View>
      </View>
      <View style={styles.info__item}>
        <View style={styles.icon_parent}>
          <SunIcon/>
        </View>
        <View>
          <Text style={[styles.textWhite, styles.content]}>70 degrees and sunny</Text>
        </View>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    marginTop: 20
  },
  icon_parent: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
  },
  content: {
    lineHeight: 25,
    textAlign: 'center'
  },
  textWhite: {
    color: "black",
  }
})

export default Beach;