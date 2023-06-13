import { createTheme } from "@mui/material";
import components from "./components";

const TyphographyOptions = {
  h1: {
    fontSize: "34px",
    lineHeight: "46px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  h2: {
    fontSize: "28px",
    lineHeight: "38px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  h3: {
    fontSize: "20px",
    lineHeight: "30px",
    fontStyle: "normal",
    fontWeight: 600,
  },
  h4: {
    fontSize: "18px",
    lineHeight: "32px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  h5: {
    fontSize: "18px",
    lineHeight: "26px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  h6: {
    fontSize: "17px",
    lineHeight: "25px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: 700,
    fontStyle: "normal",
  },
  subtitle2: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
  },
  body1: {
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "26px",
    weight: 400,
  },
  body2: {
    fontSize: "14px",
    lineHeight: "20px",
    weight: 400,
    fontStyle: "normal",
  },
  caption: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
    fontStyle: "normal",
  },
  button: {
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 700,
  },
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff7e36",
    },
    secondary: {
      main: "#f0f3f5",
    },
    text: {
      primary: "#212124",
      secondary: "#a2a6ad",
    },
  },
  typography: TyphographyOptions,
  components,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff7e36",
    },
    secondary: {
      main: "#f0f3f5",
    },
  },
  typography: TyphographyOptions,
  components,
});
