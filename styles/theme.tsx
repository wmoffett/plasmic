// import { createTheme } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#0EA56F',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
//   typography: {
//     h1: {
//       fontSize: 60,
//       lineHeight: '66px',
//       textTransform: 'uppercase',
//       marginTop: 96,
//       marginBottom: 96,
//     },
//   },
// });

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

export default theme;