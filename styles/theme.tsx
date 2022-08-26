import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0EA56F',
    },
  },
  typography: {
    h1: {
      fontSize: 60,
      lineHeight: '66px',
      textTransform: 'uppercase',
      marginTop: 96,
      marginBottom: 96,
    },
  },

});

export default theme;