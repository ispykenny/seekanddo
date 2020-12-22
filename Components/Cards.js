import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import fetcher from '../Utils/fetcher';
import Inner from './Inner';
import Heart from '../Assets/Heart';

const Cards = (props) => {
  const [allCards, setAllCards] = useState({});

  useEffect(() => {
    const fetchCards = async () => {
      let cards = await fetcher('https://seekanddo.herokuapp.com/all-locations');
      await setAllCards(cards.data.items)
    }
    fetchCards();
  }, [])

  const doThing = (e) => {
    console.log('hi',e)
  }

  
  const CardItems = () => {

    if(allCards.length >= 0) {
      return (
        allCards.map((item, index) => (
          <TouchableHighlight style={styles.card} key={index} onPress={(e) => doThing(index)}>
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
        </TouchableHighlight>
        ))
      )
    } else {
      return (
        <>
        <View style={styles.card} key={0}>
          <ImageBackground style={styles.placeholderImage}>
            <View style={styles.textOverlay}>
              <Text style={styles.overlayText, styles.cardTitle}>Loading...</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card} key={1}>
        <ImageBackground style={styles.placeholderImage}>
          <View style={styles.textOverlay}>
            <Text style={styles.overlayText, styles.cardTitle}>Loading...</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.card} key={2}>
      <ImageBackground style={styles.placeholderImage}>
        <View style={styles.textOverlay}>
          <Text style={styles.overlayText, styles.cardTitle}>Loading...</Text>
        </View>
      </ImageBackground>
    </View>
        </>
      )
    }
  }

  return (
    <View style={styles.cardParent}>
      <Inner>
        <CardItems/>
      </Inner>
    </View>
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