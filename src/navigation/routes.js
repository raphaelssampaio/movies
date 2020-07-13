import { Navigation } from 'react-native-navigation'

import { SIDE_MENU } from '../constants'

export function openSideMenu() {
  Navigation.events().registerNavigationButtonPressedListener((event) => {
    if (event.buttonId === SIDE_MENU) {
      Navigation.mergeOptions(event.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      })
    }
  })
}
