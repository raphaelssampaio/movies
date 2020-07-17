import React from 'react'
import { View } from 'react-native'
import { Image, Text } from 'react-native-elements'

import { layout, typography } from '../../styles'

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
          <Text style={typography.movieDetailsText}>Details</Text>
          <Text style={typography.movieText}>Ranking: {movie.ranking}</Text>
          <Text style={typography.movieText}>Rating: {movie.rating}</Text>
          <Text style={typography.movieText}>Year: {movie.year}</Text>
        </View>
      </View>
    </View>
  )
}
