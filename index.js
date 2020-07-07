import { Navigation } from 'react-native-navigation'
import 'react-native-gesture-handler'

import './src/navigation/screens'
import { MAIN } from './src/navigation/constants'
import { colors } from './src/styles'

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: MAIN,
            },
          },
        ],
        options: {
          topBar: {
            noBorder: true,
            visible: true,
            background: {
              color: colors.background,
            },
          },
        },
      },
    },
  })
})
