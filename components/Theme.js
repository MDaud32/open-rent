import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      ipadLandscape: 1024, // custom breakpoint for screens with width of 1024px or higher
    },
  },
});

export default theme;
