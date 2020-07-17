import { Navigation } from 'react-native-navigation'

import { SIDE_MENU } from '../constants'
import { MAIN, MOVIES, DRAWER, DETAILS } from './constants'
import { colors } from '../styles'

export function goToMain() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: DRAWER,
            passProps: {
              isMain: true,
            },
          },
        },
        center: {
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
      },
    },
  })
}

export function goToMovies(title, startAt, endAt, allTime) {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: DRAWER,
            passProps: {
              isMain: false,
              movies: title,
              startAt,
              endAt,
              allTime,
            },
          },
        },
        center: {
          stack: {
            children: [
              {
                component: {
                  name: MOVIES,
                  passProps: {
                    title: title,
                    startAt,
                    endAt,
                    allTime,
                  },
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
      },
    },
  })
}

export function goToDetails(movie, screen) {
  Navigation.push(screen.componentId, {
    component: { name: DETAILS, passProps: { movie } },
  })
}

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
