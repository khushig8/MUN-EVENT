import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b5ec5',
      second: '#030000',
    },
    secondary: {
      main: '#010b2b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      pinkish: '#cfdeff',
      lightPinkish: '#f2fbff',
    },
    glare: {
      main: 'rgba(0, 0, 0, 0.70)',
    },
    font: {
      primary: '#ffffff',
    },
    border: {
      pinkish: '#f2f5ff',
    },
    boxShadow: {
      content:
        '10px 20px 38px rgba(0, 0, 0, 0.3), 5px 15px 12px rgba(0, 0, 0, 0.22)',
    },
  },
  typography: {
    fontFamily: "'Rubik', 'sans-serif'",
  },
})
export default theme
