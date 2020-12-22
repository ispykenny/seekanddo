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
import Home from './Views/Home';
import LogginScreen from './Views/Index';

const App: () => React$Node = () => {
  const [isLoggedIn, setLoggedin] = useState(false)

  const CurrentView = () => {
    if(isLoggedIn) {
      return (
        <Home
          setLoggedin={setLoggedin}
        />
      )
    } else {
      return (
        <LogginScreen setLoggedin={setLoggedin}/>
      )
    }
  }
  return (
    <>
      <CurrentView/>
    </>
  )
};

export default App;
