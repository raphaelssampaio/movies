import React, { memo } from 'react'
import { View } from 'react-native'

import MovieDetails from '../components/Movies/movieDetails'
import { colors, layout } from '../styles'
import { Navigation } from 'react-native-navigation'
import { DETAILS, BACK } from '../navigation/constants'

function Details(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: `Movie ${DETAILS}`.toUpperCase(),
        color: colors.darkBlue,
        fontWeight: 'bold',
      },
      backButton: {
        title: BACK,
      },
    },
  })

  return (
    <View style={layout.defaultContainer}>
      <MovieDetails movie={props.movie} />
    </View>
  )
}

export default memo(Details)
