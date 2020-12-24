import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableHighlight} from 'react-native';
import Categories from '../Assets/Categories';
import HeartDark from '../Assets/HeartDark';
import HomeIcon from '../Assets/Home';
import Settings from '../Assets/Settings';
import Inner from './Inner';

const Footer = () => {
  // const [position, setPosition] = useState(0)

  const indicatorStyles = (index = 0) => {
    let value = `${1 * index}00`
    console.log(index)
    return {
      transform: [{translateX: value}]
    }
  }

  return (
    <View style={styles.footerParent}>
      <Inner>
        <View style={styles.options}>
          <View style={styles.columns} onPress={() => indicatorStyles(1)}>
            <View>
              <HomeIcon/>
            </View>
            <Text style={styles.column_text}>Home</Text>
          </View>
          <View style={styles.columns} onPress={() => indicatorStyles(2)}>
            <View>
              <Categories/>
            </View>
            <Text style={styles.column_text}>Categories</Text>
          </View>
          <View style={styles.columns} onPress={() => indicatorStyles(3)}>
            <View>
              <HeartDark/>
            </View>
            <Text style={styles.column_text}>Liked</Text>
          </View>
          <TouchableHighlight index={4} onPress={(props) => indicatorStyles(4)}>
            <View style={styles.columns}>
            <View>
              <Settings/>
            </View>
            <Text style={styles.column_text}>Settings</Text>
            </View>
          </TouchableHighlight>

          <View style={[styles.barInidcator, indicatorStyles()]}></View>
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
    backgroundColor: '#205DBF'
  }

})

export default Footer;