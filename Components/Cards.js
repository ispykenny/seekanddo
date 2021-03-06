import React, {useState, useCallback, useEffect} from 'react';
import {RefreshControl,ImageBackground, Text, View, StyleSheet, TouchableHighlight, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Inner from './Inner';
import Heart from '../Assets/Heart';
import PlaceHolder from '../Assets/Placeholder';
import fetcher from '../Utils/fetcher';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
let theCards = [];
const Cards = ({allCards, singleShowing, setSingleShowing, setSingleViewData}) => {
  const [refreshedCards, setRefreshedCards] = useState(allCards);
  const [refreshing, setRefreshing] = useState(false);
  

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const fetchCards = async () => {
      let cards = await fetcher('https://seekanddo.herokuapp.com/all-locations');
      theCards = await shuffle(cards.data.items);
      setRefreshedCards(theCards)

      wait(200).then(() =>{
        setRefreshing(false)
      })
    }
    fetchCards();
  }, []);



const rightButtons = [
  <TouchableHighlight style={{backgroundColor: 'red', height: 180}}><Text>Remove</Text></TouchableHighlight>
];




  const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const CardItem = ({item}) => {
  const doThing = useCallback((e) => {
    console.log(item.fields)
    setSingleViewData(item)
    setSingleShowing(true)
  })

  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => {
      doThing();
      // getSingleData(item.sys.id)
    }} >
      <View style={styles.card}>
        <Inner>
          <ImageBackground style={styles.image} source={{uri: `https:${item.fields.locationImage.fields.file.url}`}}>
            <View style={styles.overlay}>
              <View style={styles.category}>
                <PlaceHolder/>
                <Text style={styles.category_text}>Category One</Text>
              </View>
              <View style={styles.heart}>
                <Heart/>
              </View>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>{item.fields.locationTitle}</Text>
              </View>
            </View>
          </ImageBackground>
        </Inner>
      </View>
    </TouchableHighlight>
  )
}

  return (
    <SafeAreaView style={styles.cardParent}>
      <FlatList
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item) => item.sys.id}
        data={refreshedCards}
        contentContainerStyle={{paddingBottom: 130}}
        renderItem={ ({item}) => <CardItem item={item}/>}
      />
    </SafeAreaView>
  )
}

export default Cards;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(000, 000, 000, 0.6)'
  },
  heart: {
    position: 'absolute',
    top: 16,
    right: 20
  },
  textOverlay: {
    position: 'absolute',
    width: '70%',
    bottom: '10%',
    left: 14
  },
  cardTitle: {
    fontSize: 22,
    width: '100%',
    textTransform: 'uppercase',
    color: 'white'
  },
  overlayText: {
    color: 'white',
  },
  category: {
    position: 'absolute',
    top: 16,
    left: 14,
  },
  category_text: {
    color: 'white',
    marginTop: 10,
    fontSize: 13
  },
  image: {
    position: 'relative',
    resizeMode: 'cover',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden'
  },
  placeholderImage: {
    position: 'relative',
    resizeMode: 'cover',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: "#f5f5f5"
  },
}) 