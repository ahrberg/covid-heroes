import { createMuiTheme } from "@material-ui/core";

const defaultTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#000",
      secondary: "#dbdbdb",
    },
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#002D5A",
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
        fontSize: "2.5rem",
        [breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
      h2: {
        fontSize: "2rem",
        marginBottom: "10px",
        [breakpoints.down("xs")]: {
          fontSize: "1.5rem",
        },
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "300",
        [breakpoints.down("xs")]: {
          fontSize: "1rem",
        },
      },
    },
  },
};

export default theme;
