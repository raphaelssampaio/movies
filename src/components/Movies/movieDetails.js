import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text } from 'react-native-elements'

import { colors } from '../../styles'

export default function MovieDetails({ movie }) {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Movie: {movie.title}</Text>

        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.photo}
            resizeMode="contain"
            source={{ uri: movie.urlPoster }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ marginBottom: 20, ...styles.data }}>Movie data</Text>
          <Text style={styles.data}>Rating: {movie.rating}</Text>
          <Text style={styles.data}>Ranking: {movie.ranking}</Text>
          <Text style={styles.data}>Year: {movie.year}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    marginTop: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.mainBlue,
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: 5,
  },
  container: {
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
  },
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
  data: {
    color: colors.white,
    paddingHorizontal: 15,
    lineHeight: 20,
    fontSize: 18,
  },
})
