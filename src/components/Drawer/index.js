import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import { layout, typography, colors } from '../../styles'
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
  HOME,
} from '../../constants'
import { goToMain, goToMovies } from '../../navigation/routes'

export default function Drawer(props) {
  function renderButton(title, home) {
    return (
      <Button
        title={title}
        type="clear"
        titleStyle={typography.drawerButtonTitle}
        icon={{
          name: home ? 'home' : 'movie',
          size: 20,
          color: colors.white,
          style: layout.defaultMarginTop,
        }}
        containerStyle={layout.drawerButton}
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
    <SafeAreaView style={layout.drawerContainer}>
      {renderButton(HOME, true)}
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
