import { Box, HStack, Image, List, ListItem } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box as="nav">
      <HStack justify="space-between">
        <Image src="/logo.svg" />
        <List display="flex" gap={20}>
          <ListItem>services</ListItem>
          <ListItem>education</ListItem>
          <ListItem>experience</ListItem>
        </List>
      </HStack>
    </Box>
  );
};

export default Navbar;
