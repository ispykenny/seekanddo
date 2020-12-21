import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Inner from './Inner';

const Categories = ({setLoggedInState}) => {
  const options = [
    {
      type: 'Eating'
    },
    {
      type: 'Outdoors'
    },
    {
      type: 'Indoors'
    }
  ]

  const ShowOptions = () => {
    return options.map((item, index) => (
      <View key={index}>
        <Text style={styles.option}>{item.type}</Text>
      </View>
    ))
  }
  

  return (
    <View style={styles.categories}>
      <Inner>
        <Text style={styles.title}>I'm interested in:</Text>
        <View style={styles.option_parent}>
          <ShowOptions/>
        </View>
      </Inner>
    </View>
  )
}

const styles = StyleSheet.create({
  categories: {
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700'
  },
  option_parent: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  option: {
    color: 'black',
    borderWidth: 2,
    fontSize: 14,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    marginRight: 10
  }
})

export default Categories;