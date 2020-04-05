import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
    secondary: {
      main: "#00aa00",
    },
  },
});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        fontSize: "4rem",
        [breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
    },
  },
};

export default theme;
