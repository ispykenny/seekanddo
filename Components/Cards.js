import React, {useState, useEffect, useCallback} from 'react';
import {RefreshControl,ImageBackground, Text, View, StyleSheet, TouchableHighlight, FlatList, SafeAreaView, ScrollView } from 'react-native';
import fetcher from '../Utils/fetcher'
import Inner from './Inner';
import Heart from '../Assets/Heart';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Cards = ({allCards, setAllCards}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      const fetchCards = async () => {
        let cards = await fetcher('https://seekanddo.herokuapp.com/all-locations');
        let theCards = await shuffle(cards.data.items);

        await setAllCards(theCards)
      }
      fetchCards();
      setRefreshing(false)
    });
  }, []);

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

  return (
    <SafeAreaView style={styles.cardParent}>
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.sys.id}
          data={allCards}
          renderItem={ ({item}) => (
            <Inner>
              <View style={styles.card} key={1} onPress={(e) => doThing(1)}>
              <ImageBackground style={styles.image} source={{uri: `https:${item.fields.locationImage.fields.file.url}`}}>
                <View style={styles.overlay}>
                  <View style={styles.heart}>
                    <Heart/>
                  </View>
                  <View style={styles.textOverlay}>
                    <Text style={styles.overlayText, styles.cardTitle}>{item.fields.locationTitle}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            </Inner>
          )}
        />
       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cards;

const styles = StyleSheet.create({
  cardParent: {
    height: '100%',
    marginBottom: 20
  },
  cards: {
    color: 'blue'
  },
  card: {
    marginBottom: 30
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
    top: 18,
    right: 20
  },
  textOverlay: {
    position: 'absolute',
    width: '70%',
    bottom: '10%',
    left: 20
  },

  cardTitle: {
    fontSize: 22,
    width: '100%',
    textTransform: 'uppercase',
    color: 'white'
  },
  overlayText: {
    color: 'white'
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
  }
})