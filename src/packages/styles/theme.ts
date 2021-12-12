const theme = {
  fonts: {
    main: 'Taviraj, serif',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    grey: '#E5E5E5',
    platium: '#C6C6C6',
    transparent: 'transparent',
    primary: '#D33530',
    secondary: '#E95C58',
  }
}

const getTheme = () => {
  return theme;
}

export type ColorTypes = keyof typeof theme.colors;

export type ThemeState = ReturnType<typeof getTheme>;

export default theme;