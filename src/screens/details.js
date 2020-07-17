import React, { memo } from 'react'
import { View } from 'react-native'

import MovieDetails from '../components/Movies/movieDetails'
import { colors } from '../styles'
import { Navigation } from 'react-native-navigation'
import { DETAILS } from '../navigation/constants'

function Details(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: DETAILS,
        color: colors.darkBlue,
        fontWeight: 'bold',
      },
      backButton: {
        title: 'Back',
      },
    },
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <MovieDetails movie={props.movie} />
    </View>
  )
}

export default memo(Details)
