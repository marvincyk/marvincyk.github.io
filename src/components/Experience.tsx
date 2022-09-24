import { Heading, HStack, VStack, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
  return (
    <VStack spacing={10} alignItems="flex-start">
      <Heading alignSelf="center">experience</Heading>
      <Flex flexDir="column" pl={28} gap={10}>
        <HStack spacing={14}>
          <Image src="/50raw.svg" boxSize="100px" borderRadius="full" />
          <VStack alignItems="flex-start">
            <Text>50 Raw</Text>
            <Text>Full Stack Developer</Text>
            <Text>Jun 2022 - Present</Text>
          </VStack>
        </HStack>
        <HStack spacing={14}>
          <Image src="/50raw.svg" boxSize="100px" borderRadius="full" />
          <VStack alignItems="flex-start">
            <Text>50 Raw</Text>
            <Text>Full Stack Developer Intern</Text>
            <Text>Feb 2022 - May 2022</Text>
          </VStack>
        </HStack>
        <HStack spacing={14}>
          <Image src="/metroport.svg" boxSize="100px" borderRadius="full" />
          <VStack alignItems="flex-start">
            <Text>Metroport Group Berhad</Text>
            <Text>IT Manager</Text>
            <Text>Jan 2020 - Mar 2020</Text>
          </VStack>
        </HStack>
        <HStack spacing={14}>
          <Image src="/metroport.svg" boxSize="100px" borderRadius="full" />
          <VStack alignItems="flex-start">
            <Text>Metroport Group Berhad</Text>
            <Text>IT Manager</Text>
            <Text>Nov 2018 - Jul 2019</Text>
          </VStack>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Experience;
