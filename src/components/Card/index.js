import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Image, Text, Button } from 'react-native-elements'
import { isIphoneX } from 'react-native-iphone-x-helper'

import { colors } from '../../styles'
import { SEE_MORE } from '../../constants'
import { goToMovies } from '../../navigation/routes'

export default function Card({ title, picture }) {
  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Image style={styles.photo} resizeMode="cover" source={picture} />
        <Button
          title={SEE_MORE}
          titleStyle={styles.buttonTitleStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => goToMovies(title)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.mainBlue,
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
  },
  titleStyle: {
    fontWeight: 'bold',
    color: colors.white,
    padding: 15,
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  buttonTitleStyle: {
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonStyle: {
    backgroundColor: colors.mainBlue,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  photo: {
    height: isIphoneX() ? 180 : 160,
    width: isIphoneX() ? 180 : 160,
    borderRadius: 10,
    marginHorizontal: 5,
  },
})
