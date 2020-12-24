import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Categories from '../Assets/Categories';
import HeartDark from '../Assets/HeartDark';
import HomeIcon from '../Assets/Home';
import Settings from '../Assets/Settings';
import Inner from './Inner';

const Footer = () => {
  return (
    <View style={styles.footerParent}>
      <Inner>
        <View style={styles.options}>
          <View style={styles.columns}>
            <View>
              <HomeIcon/>
            </View>
            <Text style={styles.column_text}>Home</Text>
          </View>
          <View style={styles.columns}>
            <View>
              <Categories/>
            </View>
            <Text style={styles.column_text}>Categories</Text>
          </View>
          <View style={styles.columns}>
            <View>
              <HeartDark/>
            </View>
            <Text style={styles.column_text}>Liked</Text>
          </View>
          <View style={styles.columns}>
            <View>
              <Settings/>
            </View>
            <Text style={styles.column_text}>Settings</Text>
          </View>

        <View style={styles.barInidcator}></View>
        </View>
      </Inner>
    </View>
  )
}


const styles = StyleSheet.create({
  footerParent: {
    backgroundColor: 'rgba(255,255,255, 0.98)',
    marginTop: 15,
    position: 'relative',
    paddingBottom: 40,
  },
  options: {
    paddingTop: 15,
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  columns: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  column_text: {
    textAlign: 'center',
    marginTop: 7,
    fontSize: 12
  }, 
  barInidcator: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 4,
    width: '25%',
    backgroundColor: '#0F71D3'
  }

})

export default Footer;