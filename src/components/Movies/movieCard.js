import React from 'react'
import { View } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
import { colors } from '../../styles'
import { goToDetails } from '../../navigation/routes'

export default function MovieCard({ item }, props) {
  return (
    <View
      style={{
        shadowColor: colors.darkBlue,
        shadowOpacity: 1,
        elevation: 1,
        backgroundColor: colors.transparent,
        marginHorizontal: 5,
        marginTop: 50,
      }}
    >
      <ListItem
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: colors.cardBackground,
        }}
        titleStyle={{
          fontWeight: 'bold',
          color: colors.white,
          padding: 15,
          fontSize: 20,
        }}
        subtitleStyle={{
          color: colors.white,
          padding: 15,
          fontSize: 18,
        }}
        title={item.title}
        subtitle={'Ranking: ' + item.ranking}
        leftAvatar={{
          source: { uri: item.urlPoster },
          imageProps: { resizeMode: 'contain' },
          size: 150,
          rounded: false,
        }}
      />
      <Button
        title={'SEE DETAILS'}
        buttonStyle={{
          backgroundColor: colors.darkBlue,
        }}
        onPress={() => goToDetails(item, props)}
      />
    </View>
  )
}
