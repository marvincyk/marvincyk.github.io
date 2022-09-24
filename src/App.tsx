import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl" bgColor="black" textColor="#4E9F3D">
      <Grid minH="100vh" templateColumns="repeat(12, 1fr)" gap={6} p={8}>
        <GridItem colSpan={12}>
          <Navbar />
        </GridItem>
        <GridItem colStart={2} colEnd={10}>
          <Hero />
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);
