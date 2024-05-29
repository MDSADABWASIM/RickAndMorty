import { extendTheme } from 'native-base'
import colors from './colors'
import fonts from './fonts'
import components from './Components'

const theme = extendTheme({
  colors,
  components,
  ...fonts,
})

export default theme
