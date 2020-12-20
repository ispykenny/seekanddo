import React from 'react';
import {ImageBackground, Text, View, StyleSheet } from 'react-native';
import Inner from './Inner';

const Cards = (props) => {
  return (
    <View style={styles.cardParent}>
      <Inner>
        <View style={styles.card}>
          <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/2984224/pexels-photo-2984224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}}>
            <View style={styles.overlay}>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>La Jolla Shores</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}}>
            <View style={styles.overlay}>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>13 Point {"\n"}Brewing Company</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/6050/nature-bird-people-grass.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500`}}>
            <View style={styles.overlay}>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>Lake Murray</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/36371/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}}>
            <View style={styles.overlay}>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>Balboa Park</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground style={styles.image} source={{uri: `https://images.pexels.com/photos/5740937/pexels-photo-5740937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}}>
            <View style={styles.overlay}>
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText, styles.cardTitle}>Old Town</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Inner>
    </View>
  )
}

export default Cards;

const styles = StyleSheet.create({
  cardParent: {
    paddingVertical: 30
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
    height: 200,
    borderRadius: 10,
    overflow: 'hidden'
  }
})