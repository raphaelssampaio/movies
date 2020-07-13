import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import { colors } from '../../styles'
import {
  ALL_TIME,
  TWENTY_TWENTY,
  TWENTY_TEN,
  TWO_THOUSAND,
  NINETIES,
  EIGHTIES,
  SEVENTIES,
  SIXTIES,
  FIFITIES,
} from '../../constants'

export default function Drawer() {
  function renderButton(title, homeIcon) {
    return (
      <Button
        title={title}
        type="clear"
        titleStyle={{
          fontWeight: 'bold',
          color: colors.white,
          marginLeft: 10,
          marginTop: 20,
        }}
        icon={{
          name: homeIcon ? 'home' : 'movie',
          size: 20,
          color: 'white',
          style: { marginTop: 20 },
        }}
        containerStyle={{ alignItems: 'flex-start' }}
      />
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.darkerGrey, flex: 1 }}>
      {renderButton('Home', true)}
      {renderButton(ALL_TIME)}
      {renderButton(TWENTY_TWENTY)}
      {renderButton(TWENTY_TEN)}
      {renderButton(TWO_THOUSAND)}
      {renderButton(NINETIES)}
      {renderButton(EIGHTIES)}
      {renderButton(SEVENTIES)}
      {renderButton(SIXTIES)}
      {renderButton(FIFITIES)}
    </SafeAreaView>
  )
}
