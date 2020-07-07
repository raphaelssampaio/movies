// Initializing.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../styles'
import Card from '../components/Card'

import doisMileVinte from '../assets/doisMileVinte.jpg'
import doisMil from '../assets/doisMil.jpg'
import doisMileDez from '../assets/doisMileDez.jpg'
import allTime from '../assets/allTime.jpeg'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: 64,
          paddingHorizontal: 16,
        }}
      >
        <Text style={styles.welcome}>Welcome to Movies</Text>
        <View style={styles.container}>
          <Card title="2020 Top 10" picture={doisMileVinte} />
          <Card title="2010 Top 10" picture={doisMileDez} />
        </View>
        <View style={styles.container}>
          <Card title="2000 Top 10" picture={doisMil} />
          <Card title="All time top 10" picture={allTime} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    color: colors.white,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
