import React, { Children } from 'react';
import {View, StyleSheet} from 'react-native'

const Inner = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
})

export default Inner;