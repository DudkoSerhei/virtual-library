import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
});

export default theme;
