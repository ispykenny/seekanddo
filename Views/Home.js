import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Nav from '../Components/Nav';
import Categories from '../Components/Categories';
import Cards from '../Components/Cards';
import SettingsPanel from './SettingsPanel';

const Home = ({setLoggedin}) => {
  const [showingSettings, setShowSettings] = useState(false)
  const [categories, setTheCategories] = useState([{
    type: 'Eating',
    checked: true,
  },
  {
    type: 'Dakota and Kayden',
    checked: false
  },
  {
    type: 'Indoors',
    checked: true
  }])


  useEffect(() => {
    console.log(categories)
  }, [categories]);



  const CurrentView = () => {
    if(showingSettings) {
      return (
        <SettingsPanel/>
      )
      
    } else {
      return (
        <>
          <Categories 
            setTheCategories={setTheCategories}
            categories={categories}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Cards/>          
          </ScrollView>
        </>
      )
    }
  }
  
  return (
    <View style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.parentApp}>
        <Nav 
          setShowSettings={setShowSettings}
          showingSettings={showingSettings}
        />
        <CurrentView/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentApp: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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

export default Home;
