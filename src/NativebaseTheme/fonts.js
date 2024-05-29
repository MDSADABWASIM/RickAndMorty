// TODO: Fill in once design hand off is complete and update it for Clearface/WorkSans

const fontConfig = {
  WorkSans: {
    400: {
      normal: 'WorkSans-Regular',
      italic: 'WorkSans-Italic',
    },
    800: {
      normal: 'WorkSans-Bold',
    },
  },
  ClearFace: {
    400: {
      normal: 'Clearface-Regular',
    },
  },
  Inter: {
    400: {
      normal: 'Inter-Regular',
    },
    500: {
      normal: 'Inter-Medium',
    },
    600: {
      normal: 'Inter-SemiBold',
    },
    700: {
      normal: 'Inter-Bold',
    },
    800: {
      normal: 'Inter-Black',
    },
  },
}

const fonts = {
  heading: 'Inter',
  body: 'Inter',
  mono: 'Inter',
}

const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 15,
  md: 18,
  lg: 20,
  xl: 30,
  '2xl': 40,
  '4xl': 60,
}

export default {
  fontConfig,
  fonts,
  fontSizes,
}
