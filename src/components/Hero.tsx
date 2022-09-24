import { Heading, HStack, Text, VStack, Image, Button } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <HStack justify="space-between">
      <VStack alignItems="flex-start" textAlign="left" gap={4}>
        <Heading>Hi, I'm Marvin.</Heading>
        <Text maxW="96">
          An aspiring Software Engineer pursuing a BSc Computer Science degree
          at the University of Melbourne.
        </Text>
        <Button colorScheme="green" size="lg" textColor="black">
          CONTACT ME
        </Button>
      </VStack>
      <Image src="/portrait.jpg" boxSize="300px" borderRadius="full" />
    </HStack>
  );
};

export default Hero;
