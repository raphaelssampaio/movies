import { Navigation } from 'react-native-navigation'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Main from '../screens/main'
import Drawer from '../components/Drawer'
import Movies from '../screens/movies'

import { MAIN, DRAWER, MOVIES } from './constants'

Navigation.registerComponent(MAIN, () => gestureHandlerRootHOC(Main))
Navigation.registerComponent(DRAWER, () => gestureHandlerRootHOC(Drawer))
Navigation.registerComponent(MOVIES, () => gestureHandlerRootHOC(Movies))
