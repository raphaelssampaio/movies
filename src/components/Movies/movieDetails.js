import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text } from 'react-native-elements'

import { colors } from '../../styles'

export default function MovieDetails({ data }) {
  return (
    <View>
      <Text style={styles.titleStyle}>Movie: {data.title}</Text>
      <Text style={styles.description}>Description: {data.description}</Text>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.photo}
          resizeMode="cover"
          source={{ uri: data.picture }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    color: colors.white,
    padding: 15,
    fontSize: 24,
    textAlign: 'center',
  },
  photo: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  description: {
    color: colors.white,
    padding: 15,
    fontSize: 18,
  },
})
