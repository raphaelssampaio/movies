import { Navigation } from 'react-native-navigation'
import 'react-native-gesture-handler'

import './src/navigation/screens'
import { goToMain } from './src/navigation/routes'

Navigation.events().registerAppLaunchedListener(() => {
  goToMain()
})
