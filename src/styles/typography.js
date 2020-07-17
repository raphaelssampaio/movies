import colors from './colors'

export const alignStart = { alignSelf: 'flex-start' }

export const defaultTitle = {
  ...alignStart,
  fontWeight: 'bold',
  color: colors.white,
  padding: 15,
  fontSize: 20,
}

export const defaultSubtitle = {
  color: colors.white,
  padding: 15,
  fontSize: 18,
}

export const buttonTitle = {
  fontWeight: 'bold',
  color: colors.white,
}

export const drawerButtonTitle = {
  ...buttonTitle,
  marginLeft: 10,
  marginTop: 20,
}

export const movieText = {
  color: colors.white,
  paddingHorizontal: 15,
  marginBottom: 5,
  lineHeight: 20,
  fontSize: 18,
}

export const movieDetailsText = {
  ...movieText,
  marginBottom: 20,
}

export const movieTitle = {
  fontWeight: 'bold',
  color: colors.white,
  padding: 15,
  fontSize: 24,
  textAlign: 'center',
}
