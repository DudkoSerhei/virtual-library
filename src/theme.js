import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    colors: {
      white: '#fff',
      main: '#1d4354',
      primary: '#95df00',
      divider: '#a9a9a999',
      text: '#222222',
    },
    background: {
      default: '#f1f2f4',
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
});

export default theme;
