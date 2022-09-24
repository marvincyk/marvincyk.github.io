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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" bgColor="black" textColor="#4E9F3D">
      <Grid minH="100vh" templateColumns="repeat(12, 1fr)" gap={6} p={8}>
        <GridItem colSpan={12}>
          <Navbar />
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);
