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
import { goToMain, goToMovies } from '../../navigation/routes'

export default function Drawer(props) {
  function renderButton(title, home) {
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
          name: home ? 'home' : 'movie',
          size: 20,
          color: 'white',
          style: { marginTop: 20 },
        }}
        containerStyle={{ alignItems: 'flex-start' }}
        onPress={() => buttonPress(home, title)}
      />
    )
  }

  function buttonPress(home, title) {
    const { isMain, movies } = props
    if (isMain) {
      return home ? null : goToMovies(title)
    }
    if (movies === title) {
      return home ? goToMain() : null
    }
    return home ? goToMain() : goToMovies(title)
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
