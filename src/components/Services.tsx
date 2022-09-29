import React from "react";
import Lottie from "lottie-react";
import coding from "../lotties/coding.json";
import {
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";

const Services = () => {
  return (
    <HStack justify="space-between">
      <Lottie
        animationData={coding}
        loop={true}
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <VStack spacing={10} alignItems="flex-start" textAlign="left">
        <Heading>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(2500).typeString("services").start();
            }}
          />
        </Heading>
        <List spacing={4}>
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
    </HStack>
  );
};

export default Services;
