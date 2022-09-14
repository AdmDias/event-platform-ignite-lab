import { DefaultTheme } from '@react-navigation/native';
import { extendTheme } from 'native-base';

const NATIVEBASETHEME = extendTheme({
  colors: {
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF',
    blue: {
      400: '#81D8F7'
    }
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});

const RNAVIGATIONTHEME = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      background: '#09090A'
  }
}

export {
  NATIVEBASETHEME,
  RNAVIGATIONTHEME
}
