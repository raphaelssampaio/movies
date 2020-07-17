import { StyleSheet } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import colors from './colors'

export default StyleSheet.create({
  defaultContainer: { flex: 1, backgroundColor: colors.background },
  shadow: {
    marginTop: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.mainBlue,
    shadowOpacity: 1,
    elevation: 1,
    backgroundColor: colors.transparent,
    marginHorizontal: 5,
  },
  secondBgColor: {
    backgroundColor: colors.darkBlue,
  },
  cardContainer: {
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainDefault: { paddingTop: 64, paddingHorizontal: 16 },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButton: {
    backgroundColor: colors.mainBlue,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  cardPicture: {
    height: isIphoneX() ? 180 : 160,
    width: isIphoneX() ? 180 : 160,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  drawerContainer: { backgroundColor: colors.darkerGrey, flex: 1 },
  drawerButton: { alignItems: 'flex-start' },
  movieCardContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.cardBackground,
  },
  moviePicture: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  movieCard: {
    borderRadius: 20,
    backgroundColor: colors.cardBackground,
  },
  center: {
    alignItems: 'center',
  },
  defaultMarginVertical: { marginVertical: 20 },
  defaultMarginBottom: { marginBottom: 20 },
  defaultMarginTop: { marginTop: 20 },
})
