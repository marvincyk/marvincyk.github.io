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
        rowGap={{ base: "60", lg: "80" }}
        p={8}
      >
        <GridItem
          colSpan={12}
          display="flex"
          flexDirection="column"
          gap={{ base: 20, md: 40, lg: 60 }}
        >
          <Navbar />
          <Fade>
            <Hero />
          </Fade>
        </GridItem>
        <GridItem colSpan={12} id="services">
          <Fade>
            <Services />
          </Fade>
        </GridItem>
        <GridItem colSpan={12} id="education">
          <Fade>
            <Education />
          </Fade>
        </GridItem>
        <GridItem colSpan={12} id="experience">
          <Fade>
            <Experience />
          </Fade>
        </GridItem>
        <GridItem colSpan={12} id="socials">
          <Fade>
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
