import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

import MovieList from '../components/Movies/movieList'
import { Navigation } from 'react-native-navigation'
import { MOVIES, SIDE_MENU } from '../constants'
import { colors } from '../styles'
import { sideMenu } from '../assets'

function Movies(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: MOVIES,
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
    <View>
      <Text>{props.title}</Text>
      <MovieList />
    </View>
  )
}

export default Movies
