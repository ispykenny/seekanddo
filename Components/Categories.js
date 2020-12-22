import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Inner from './Inner';

const Categories = ({setTheCategories, categories}) => {
  
  const updateCategories = index => {
    console.log(index, categories[index].checked)
    categories[index].checked = !categories[index].checked
    setTheCategories(categories)
    console.table(categories)
  }
  
  

  return (
    <View style={styles.categories}>
      <Inner>
        <Text style={styles.title}>Where will you go today?</Text>
        <View style={styles.option_parent}>
          {categories.map((item, index) => (
    <TouchableHighlight  onPress={() => updateCategories(index)} style={[styles.option, item.checked ? styles.checked : null]} key={index}>
        <View>
          <Text>{item.type}</Text>
        </View>
      </TouchableHighlight>
    ))}
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
    color: 'white',
    fontSize: 14,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    fontWeight: '700',
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginRight: 10
  },
  checked: {
    backgroundColor: '#0F71D3',
    color: 'white'
  }
})

export default Categories;