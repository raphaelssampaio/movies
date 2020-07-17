import React, { memo, useEffect } from 'react'
import { View } from 'react-native'
import Card from '../components/Card'
import { twentyTen, twoThousand, nineties, allTime, sideMenu } from '../assets'
import {
  TWENTY_TEN,
  TWO_THOUSAND,
  ALL_TIME,
  HOME,
  SIDE_MENU,
  NINETIES,
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
        <Card
          title={TWENTY_TEN}
          picture={twentyTen}
          startAt={2010}
          endAt={2019}
        />
        <Card
          title={TWO_THOUSAND}
          picture={twoThousand}
          startAt={2000}
          endAt={2009}
        />
      </View>
      <View style={[layout.defaultContainer, layout.mainContainer]}>
        <Card title={NINETIES} picture={nineties} startAt={1990} endAt={1999} />
        <Card title={ALL_TIME} picture={allTime} allTime />
      </View>
    </View>
  )
}

export default memo(Main)
