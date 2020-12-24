import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  RefreshControl
} from 'react-native';
import Nav from '../Components/Nav';
import Categories from '../Components/Categories';
import Cards from '../Components/Cards';
import SettingsPanel from './SettingsPanel';
import fetcher from '../Utils/fetcher';
import Footer from '../Components/Footer';


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Home = ({setLoggedin}) => {
  const [showingSettings, setShowSettings] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [allCards, setAllCards] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      let cards = await fetcher('https://seekanddo.herokuapp.com/all-locations');
      await setAllCards(cards.data.items)
    }
    fetchCards()
  }, [])


  const [categories, setTheCategories] = useState([{
    type: 'Eating',
    checked: true,
  },
  {
    type: 'Outdoors',
    checked: false
  },{
    type: 'Outdoors',
    checked: false
  },{
    type: 'Outdoors',
    checked: false
  },{
    type: 'Outdoors',
    checked: false
  },{
    type: 'Outdoors',
    checked: false
  },
  {
    type: 'Indoors',
    checked: true
  }])


  useEffect(() => {
    console.log(categories)
  }, [categories]);


  const SetTheCards = () => {
    if(allCards.length >= 1) {
      return (
        <Cards allCards={allCards} setAllCards={setAllCards}/>
      )
    } else {
      return (
        <View>
          <Text>none</Text>
        </View>
      )
    }
  }



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
          <SetTheCards/>  
        </>
      )
    }
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.parentApp}>
        <Nav 
          setShowSettings={setShowSettings}
          showingSettings={showingSettings}
        />
        <CurrentView/>
      </SafeAreaView>
      <Footer/>
      
    </>
  );
};

const styles = StyleSheet.create({
  parentApp: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent'
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
