import { Box, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";

const Navbar = () => {
  return (
    <Box as="nav">
      <HStack justify="space-between" align="center">
        <Image src="/logo.svg" w="300px" h="60px" ml={-16} />
        <List display="flex" gap={20}>
          <Link to="services" smooth>
            <ListItem
              _hover={{
                cursor: "pointer",
                color: "white",
              }}
            >
              services
            </ListItem>
          </Link>
          <Link to="education" smooth>
            <ListItem
              _hover={{
                cursor: "pointer",
                color: "white",
              }}
            >
              education
            </ListItem>
          </Link>
          <Link to="experience" smooth>
            <ListItem
              _hover={{
                cursor: "pointer",
                color: "white",
              }}
            >
              experience
            </ListItem>
          </Link>
        </List>
      </HStack>
    </Box>
  );
};

export default Navbar;
