/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Nav from './Components/Nav';
import Categories from './Components/Categories';
import LoggedIn from './Views/Loggedin';
import LoggedOut from './Views/LoggedOut';

const App: () => React$Node = () => {
  const [loggedInStatus, setLoggedInState] = useState(false)

  const CurrentView = () => {
    if(loggedInStatus) {
      return (
        <LoggedIn/>
      )
    } else {
      return (
        <LoggedOut setLoggedInState={setLoggedInState}/>
      )
    }
  }

  return (
    <View style={{backgroundColor: '#000000', height: '100%'}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Nav loggedInStatus={loggedInStatus}/>
        { loggedInStatus ? <Categories setLoggedInState={setLoggedInState}/> : <Text>''</Text> }
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <CurrentView/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    color: 'white',
    backgroundColor: '#000000'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#000000',
    height: '100%',
    color: '#ffffff'
  },
  sectionContainer: {
    marginTop: 262,
    paddingHorizontal: 24,
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
