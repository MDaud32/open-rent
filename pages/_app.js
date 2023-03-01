import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
