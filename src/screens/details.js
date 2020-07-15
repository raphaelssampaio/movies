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

  const data = {
    title: 'Teste',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    description:
      'dsadsadas das asd adadsa da ssd asd asd asd asdadas dsad asasd asd asdas dasda sda dsadsa asd asdas das dasd asd as asdas dasd as asdasd sa dasd asdsaasd asdasd asdasd sadadas da sdasd as dsa da ',
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <MovieDetails data={data} />
    </View>
  )
}

export default memo(Details)
