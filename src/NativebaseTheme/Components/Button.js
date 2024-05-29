const Button = {
  baseStyle: {},
  defaultProps: {
    variant: 'default',
  },
  variants: {
    default: {
      _light: {
        bg: 'primary.orange.400',
        _text: {
          color: '#FFF',
        },
        _pressed: {
          bg: 'primary.orange.600',
        },
        _disabled: {
          bg: '#DADADA',
          _text: {
            color: '#A9A9A9',
          },
        },
      },
    },
  },
}

export default Button
