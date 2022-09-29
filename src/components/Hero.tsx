import { Heading, HStack, Text, VStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import React from "react";

const Hero = () => {
  return (
    <HStack justify="space-between">
      <VStack alignItems="flex-start" textAlign="left" gap={4}>
        <Heading>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Marvin.").start();
            }}
          />
        </Heading>
        <Text maxW="2xl">
          An aspiring Software Engineer pursuing a BSc Computer Science degree
          at the University of Melbourne.
        </Text>
        <Link to="socials" smooth>
          <Button bg="custom.100" size="lg" textColor="black">
            CONTACT ME
          </Button>
        </Link>
      </VStack>
      <Image src="/portrait.jpg" boxSize="300px" borderRadius="full" />
    </HStack>
  );
};

export default Hero;
