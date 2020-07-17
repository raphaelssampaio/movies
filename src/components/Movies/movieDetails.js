import React from 'react'
import { View } from 'react-native'
import { Image, Text } from 'react-native-elements'

import { layout, typography } from '../../styles'
import { PLOT, RANKING, RATING, YEAR } from '../../constants'

export default function MovieDetails({ movie }) {
  return (
    <View style={layout.shadow}>
      <View style={layout.movieCard}>
        <Text style={typography.movieTitle}>{movie.title}</Text>

        <View style={layout.center}>
          <Image
            style={layout.moviePicture}
            resizeMode="contain"
            source={{ uri: movie.urlPoster }}
          />
        </View>
        <View style={layout.defaultMarginVertical}>
          <Text style={typography.movieText}>
            <Text style={typography.bold}>{PLOT}</Text>
            {movie.plot}
          </Text>
          <Text style={typography.movieText}>
            <Text style={typography.bold}>{RANKING}</Text>
            {movie.ranking}
          </Text>
          <Text style={typography.movieText}>
            <Text style={typography.bold}>{RATING}</Text>
            {movie.rating}
          </Text>
          <Text style={typography.movieText}>
            <Text style={typography.bold}>{YEAR}</Text>
            {movie.year}
          </Text>
        </View>
      </View>
    </View>
  )
}
