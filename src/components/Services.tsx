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
      <VStack gap={4} alignItems="flex-start" textAlign="left">
        <Heading>services</Heading>
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
