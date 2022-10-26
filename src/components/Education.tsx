import { Heading, Stack, Image, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import React from "react";

const Education = () => {
  return (
    <VStack spacing={10} alignItems="center" pt={4}>
      <Heading
        alignSelf="center"
        fontSize={{ base: "2xl", lg: "4xl" }}
        pl={{ base: 8, md: 0 }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(5000).typeString("education").start();
          }}
        />
      </Heading>
      <Stack
        spacing={14}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Image src="/unimelb.svg" boxSize="100px" borderRadius="full" />
        <VStack
          alignItems={{ base: "center", md: "flex-start" }}
          fontSize={{ base: "xs", lg: "md" }}
          whiteSpace="nowrap"
        >
          <Text>University of Melbourne</Text>
          <Text>BSc Computer Science</Text>
          <Text>Jul 2019 - Dec 2022</Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Education;
