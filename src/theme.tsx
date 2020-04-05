import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#dbdbdb",
    },
    background: {
      default: "#27769F",
    },
    primary: {
      main: "rgb(0,45,90)",
    },
    secondary: {
      main: "#dbdbdb",
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
