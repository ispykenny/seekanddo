import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

import Inner from './Inner';

const Nav = ({loggedInStatus}) => {
  const [theStater, setStater] = useState(false);

  const updateTheButton = () => {
    setStater(!theStater);

    setTimeout(() => console.log(theStater))
  }

  const UserAvatar = () => {
    if(loggedInStatus) {
      return (
        <View>
          <ImageBackground style={styles.avatar} source={{uri: `https://avatars3.githubusercontent.com/u/15894356?s=460&u=118ce796d5f3016317cbe6da7e6ebed39d641cd1&v=4`}}> 
          </ImageBackground>
        </View>
      )
    } else {
      return (
        <Text>''</Text>
      )
    }
  }

  return (
    <View style={styles.navParent}>
      <Inner>
        <View style={styles.nav}>
          <View>
            <Text style={{color: 'white', textAlign: 'left', fontWeight: '800', fontSize: 24}} onPress={updateTheButton}>Seekando</Text>
          </View>
          <UserAvatar/>
        </View>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  navParent: {
    borderBottomColor: '#111',
    borderBottomWidth: 2
  },

  nav: {
    paddingVertical: 20,
    color: 'white',
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
