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
        rowGap={40}
        p={8}
      >
        <GridItem colSpan={12}>
          <Navbar />
        </GridItem>
        <GridItem colStart={2} colEnd={12}>
          <Hero />
        </GridItem>
        <GridItem colStart={3} colEnd={11}>
          <Services />
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);
