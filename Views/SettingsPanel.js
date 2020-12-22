import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import Favorites from '../Components/Favorites';
import Inner from '../Components/Inner';
const SettingsPanel = () => {
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Inner>
          <Favorites/>
        </Inner>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  parentApp: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  scrollView: {
    color: 'black',
    height: '100%',
    paddingTop: 20,
    position: 'relative'
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  }
});

export default SettingsPanel;