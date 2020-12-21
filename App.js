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
import Home from './Views/Home'
import Nav from './Components/Nav';
import LoggedOut from './Views/LoggedOut';
import Panel from './Components/Panel';

const App: () => React$Node = () => {
  const [loggedInStatus, setLoggedInState] = useState(true)
  const [panelShowing, setPanelView] = useState(true)

  const CurrentView = () => {
    if(loggedInStatus) {
      return (
        <Home/>
      )
    } else {
      return (
        <LoggedOut/>
      )
    }
  }

  return (
    <View style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <Nav loggedInStatus={loggedInStatus} setPanelView={setPanelView}/>
      
      <CurrentView/>

      
      <Panel setPanelView={setPanelView} panelShowing={panelShowing} setLoggedInState={setLoggedInState}/>
    </View>
  );
};


export default App;
