import React, { memo, useEffect } from 'react'
import { View } from 'react-native'
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
import { colors, layout } from '../styles'
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
    <View style={[layout.defaultContainer, layout.mainDefault]}>
      <View style={[layout.defaultContainer, layout.mainContainer]}>
        <Card title={TWENTY_TWENTY} picture={twentyTwenty} />
        <Card title={TWENTY_TEN} picture={twentyTen} />
      </View>
      <View style={[layout.defaultContainer, layout.mainContainer]}>
        <Card title={TWO_THOUSAND} picture={twoThousand} />
        <Card title={ALL_TIME} picture={allTime} />
      </View>
    </View>
  )
}

export default memo(Main)
