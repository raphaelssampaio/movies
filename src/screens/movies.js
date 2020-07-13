import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import MovieList from '../components/Movies/movieList'
import { Navigation } from 'react-native-navigation'
import { SIDE_MENU } from '../constants'
import { colors } from '../styles'
import { sideMenu } from '../assets'

function Movies(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: String(props.title).toUpperCase(),
        color: colors.darkBlue,
      },
      leftButtons: {
        id: SIDE_MENU,
        icon: sideMenu,
        color: colors.darkBlue,
      },
    },
  })

  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
      <MovieList />
    </View>
  )
}

export default Movies
