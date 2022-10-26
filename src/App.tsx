import * as React from "react";
import "@fontsource/press-start-2p";
import {
  ChakraProvider,
  Box,
  Grid,
  extendTheme,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Socials from "./components/Socials";
import ScrollToTop from "react-scroll-to-top";
import { Fade } from "react-awesome-reveal";

const theme = extendTheme({
  fonts: {
    heading: `"Press Start 2P", cursive`,
    body: `"Press Start 2P", cursive`,
  },
  colors: {
    custom: {
      100: "#D8E9A8",
      200: "#4E9F3D",
      300: "#1E5128",
      400: "#191A19",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor="black" textColor="custom.200">
      <Grid
        minH="100vh"
        templateColumns="repeat(12, 1fr)"
        columnGap={6}
        rowGap={80}
        p={8}
      >
        <GridItem colSpan={12}>
          <Navbar />
        </GridItem>
        <GridItem colStart={2} colEnd={12}>
          <Fade fraction={0.5}>
            <Hero />
          </Fade>
        </GridItem>
        <GridItem colStart={3} colEnd={11} id="services">
          <Fade fraction={0.5}>
            <Services />
          </Fade>
        </GridItem>
        <GridItem colStart={4} colEnd={10} id="education">
          <Fade fraction={0.5}>
            <Education />
          </Fade>
        </GridItem>
        <GridItem colStart={4} colEnd={10} id="experience">
          <Fade fraction={0.5}>
            <Experience />
          </Fade>
        </GridItem>
        <GridItem colStart={4} colEnd={10} id="socials">
          <Fade fraction={0.5}>
            <Socials />
          </Fade>
        </GridItem>
      </Grid>
    </Box>
    <ScrollToTop
      smooth
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#4E9F3D",
      }}
    />
  </ChakraProvider>
);
