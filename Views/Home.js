import React from 'react';
import Categories from '../Components/Categories';
import Cards from '../Components/Cards';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.parentApp}>
        <Categories/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Cards/>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  parentApp: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 110
  },
  scrollView: {
    color: 'black',
    height: '100%',
    position: 'relative',
    overflow: 'scroll',
    marginBottom: 50
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