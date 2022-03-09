import { createTheme } from '@mui/material/styles';

export const normalTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#bd0707',
    },
    secondary: {
      main: '#ffc510',
    },
    background: {
      default: '#e5f64c',
      paper: '#4c94f6',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Roboto',
    },
    fontFamily: 'Bangers',
    caption: {
      fontFamily: 'Do Hyeon',
    },
    overline: {
      fontFamily: 'Do Hyeon',
    },
    body2: {
      fontFamily: 'Roboto',
    },
  },
};
const theme = createTheme(normalTheme);
export default theme