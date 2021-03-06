import React, { memo } from 'react'
import { View } from 'react-native'

import MovieList from '../components/Movies/movieList'
import { Navigation } from 'react-native-navigation'
import { SIDE_MENU } from '../constants'
import { colors, layout } from '../styles'
import { sideMenu } from '../assets'

function Movies(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: String(props.title).toUpperCase(),
        color: colors.darkBlue,
        fontWeight: 'bold',
      },
      leftButtons: {
        id: SIDE_MENU,
        icon: sideMenu,
        color: colors.darkBlue,
      },
    },
  })

  return (
    <View style={layout.defaultContainer}>
      <MovieList
        componentId={props.componentId}
        startAt={props.startAt}
        endAt={props.endAt}
        allTime={props.allTime}
      />
    </View>
  )
}

export default memo(Movies)
