import React, { memo, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import Card from '../components/Card'
import {
  twentyTwenty,
  twentyTen,
  twoThousand,
  allTime,
  sideMenu,
} from '../assets'
import {
  TWENTY_TWENTY,
  TWENTY_TEN,
  TWO_THOUSAND,
  ALL_TIME,
  HOME,
  SIDE_MENU,
} from '../constants'
import { openSideMenu } from '../navigation/routes'
import { colors } from '../styles'
import { Navigation } from 'react-native-navigation'

function Main(props) {
  Navigation.mergeOptions(props.componentId, {
    topBar: {
      title: {
        text: HOME,
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

  useEffect(() => {
    openSideMenu()
  }, [])

  return (
    <View style={styles.default}>
      <View style={styles.container}>
        <Card title={TWENTY_TWENTY} picture={twentyTwenty} />
        <Card title={TWENTY_TEN} picture={twentyTen} />
      </View>
      <View style={styles.container}>
        <Card title={TWO_THOUSAND} picture={twoThousand} />
        <Card title={ALL_TIME} picture={allTime} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 64,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 28,
    color: colors.white,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default memo(Main)
