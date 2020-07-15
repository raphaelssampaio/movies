import { Navigation } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Main from '../screens/main'
import Movies from '../screens/movies'
import Details from '../screens/details'

import Drawer from '../components/Drawer'

import { MAIN, DRAWER, MOVIES, DETAILS } from './constants'

Navigation.registerComponent(MAIN, () => gestureHandlerRootHOC(Main))
Navigation.registerComponent(MOVIES, () => gestureHandlerRootHOC(Movies))
Navigation.registerComponent(DETAILS, () => gestureHandlerRootHOC(Details))

Navigation.registerComponent(DRAWER, () => gestureHandlerRootHOC(Drawer))
