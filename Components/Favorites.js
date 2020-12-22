import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Favorites = () => {
  let list = [];

  const ListOfFavorites = () => {
    if(list.length > 0) {
      return <View><Text>List here</Text></View>
    } else {
      return (
        <View>
          <Text style={styles.favorite_none}>Nothing added yet.</Text>
        </View>
      )
    }
  }

  return (
    <View>
      <Text style={styles.title}>Your Favorites</Text>
      <View style={styles.favorite}>
        <ListOfFavorites/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  favorite_none: {
    fontSize: 18,
    fontWeight: '500',
    color: '#aaa',
    marginTop: 10
  }
});

export default Favorites;
