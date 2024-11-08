import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666F73",
    },
  },
  components:{
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides:{
        root:{
          padding : "8px 24px",
          border: "1px solid #1586FD",
          fontWeight: 600,
        }
      },
    },
  },
  typography:{
    body1:{
      color: "#0B1134CC",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
