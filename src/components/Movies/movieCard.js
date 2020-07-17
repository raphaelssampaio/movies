import React from 'react'
import { View } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import { layout, typography } from '../../styles'
import { goToDetails } from '../../navigation/routes'
import { SEE_DETAILS, SIMPLE_PLOT } from '../../constants'

export default function MovieCard({ item }, props) {
  return (
    <View style={layout.shadow}>
      <ListItem
        containerStyle={layout.movieCardContainer}
        titleStyle={typography.defaultTitle}
        subtitleStyle={typography.defaultSubtitle}
        title={item.title}
        subtitle={`${SIMPLE_PLOT}: ${item.simplePlot}`}
        leftAvatar={{
          source: { uri: item.urlPoster },
          imageProps: { resizeMode: 'contain' },
          size: 150,
          rounded: false,
        }}
      />
      <Button
        title={SEE_DETAILS}
        buttonStyle={layout.secondBgColor}
        onPress={() => goToDetails(item, props)}
      />
    </View>
  )
}
