import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import React from "react";

const Education = () => {
  return (
    <VStack spacing={10} alignItems="flex-start" pt={4}>
      <Heading alignSelf="center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(5000).typeString("education").start();
          }}
        />
      </Heading>
      <HStack spacing={14} pl={28}>
        <Image src="/unimelb.svg" boxSize="100px" borderRadius="full" />
        <VStack alignItems="flex-start">
          <Text>University of Melbourne</Text>
          <Text>BSc Computer Science</Text>
          <Text>Jul 2019 - Dec 2022</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Education;
