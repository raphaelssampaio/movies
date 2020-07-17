import React, { memo } from 'react'
import { ScrollView } from 'react-native'

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
    <ScrollView style={layout.detailsContainer}>
      <MovieDetails movie={props.movie} />
    </ScrollView>
  )
}

export default memo(Details)
