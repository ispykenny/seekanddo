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
import Chirp from './Components/Chirp';
import Panel from './Components/Panel';

const App: () => React$Node = () => {
  const [loggedInStatus, setLoggedInState] = useState(false)
  const [panelShowing, setPanelView] = useState(true)

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
    <View style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.parentApp}>
        <Nav loggedInStatus={loggedInStatus} setPanelView={setPanelView}/>
        { loggedInStatus ? <Categories/> : <View></View> }
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <CurrentView/>
        </ScrollView>
      </SafeAreaView>

      {/* <Chirp/> */}
      <Panel setPanelView={setPanelView} panelShowing={panelShowing} setLoggedInState={setLoggedInState}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentApp: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  scrollView: {
    color: 'black',
    height: '100%',
    position: 'relative'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    height: '100%',
    color: '#000000'
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
