import React from 'react'
import { View } from 'react-native'
import { Image, Text, Button } from 'react-native-elements'

import { layout, typography } from '../../styles'
import { SEE_MORE } from '../../constants'
import { goToMovies } from '../../navigation/routes'

export default function Card({ title, picture, startAt, endAt, allTime }) {
  return (
    <View style={layout.shadow}>
      <View style={layout.cardContainer}>
        <Text style={typography.defaultTitle}>{title}</Text>
        <Image style={layout.cardPicture} resizeMode="cover" source={picture} />
        <Button
          title={SEE_MORE}
          titleStyle={typography.buttonTitle}
          buttonStyle={layout.cardButton}
          onPress={() => goToMovies(title, startAt, endAt, allTime)}
        />
      </View>
    </View>
  )
}
