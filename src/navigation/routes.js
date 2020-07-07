import { Navigation } from 'react-native-navigation'
import { MAIN } from './constants'

export const goToMain = () =>
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
      },
    },
  })
