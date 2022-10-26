import React from "react";
import Lottie from "lottie-react";
import coding from "../lotties/coding.json";
import {
  Heading,
  Stack,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";

const Services = () => {
  return (
    <Stack
      justify="center"
      align={"center"}
      direction={{ base: "column-reverse", md: "row" }}
      gap={20}
    >
      <Lottie
        animationData={coding}
        loop={true}
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <VStack
        spacing={10}
        alignItems="flex-start"
        textAlign="left"
        pl={{ base: 8, md: 0 }}
      >
        <Heading fontSize={{ base: "2xl", lg: "4xl" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(2500).typeString("services").start();
            }}
          />
        </Heading>
        <List spacing={4} fontSize={{ base: "xs", lg: "md" }}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="custom.100" mr={4} />
            Web development
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="custom.100" mr={4} />
            Mobile development
          </ListItem>
        </List>
      </VStack>
    </Stack>
  );
};

export default Services;
