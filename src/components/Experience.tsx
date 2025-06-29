import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Experience = () => {
  return (
    <VStack spacing={10} alignItems="center" pt={4}>
      <Heading
        alignSelf="center"
        fontSize={{ base: "2xl", lg: "4xl" }}
        pl={{ base: 8, md: 0 }}
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(7500).typeString("experience").start();
          }}
        />
      </Heading>

      <Flex
        flexDir="column"
        whiteSpace={"nowrap"}
        gap={20}
        align="center"
        fontSize={{ base: "xs", lg: "md" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
        >
          <Image
            src="/easygo.jpeg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>Easygo</Text>
            <Text>Software Engineer</Text>
            <Text>Feb 2024 - Present</Text>
          </VStack>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
          pr={{ base: 0, md: 7 }}
        >
          <Image
            src="/blackai.jpeg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>Black.ai</Text>
            <Text>Software Engineer</Text>
            <Text>Nov 2022 - Dec 2023</Text>
          </VStack>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
        >
          <Image
            src="/50raw.svg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>50 Raw</Text>
            <Text>Full Stack Developer</Text>
            <Text>Jun 2022 - Oct 2022</Text>
          </VStack>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
        >
          <Image
            src="/50raw.svg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>50 Raw</Text>
            <Text>Full Stack Developer</Text>
            <Text>(Internship)</Text>
            <Text>Feb 2022 - May 2022</Text>
          </VStack>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
          pl={{ base: 0, md: 7 }}
        >
          <Image
            src="/metroport.svg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>Metroport Group Berhad</Text>
            <Text>Head of IT</Text>
            <Text>Jan 2020 - Mar 2020</Text>
          </VStack>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={14}
          pl={{ base: 0, md: 7 }}
        >
          <Image
            src="/metroport.svg"
            boxSize="100px"
            borderRadius="full"
            alignSelf={{ base: "center", md: "flex-start" }}
          />
          <VStack alignItems={{ base: "center", md: "flex-start" }}>
            <Text>Metroport Group Berhad</Text>
            <Text>Head of IT</Text>
            <Text>Nov 2018 - Jul 2019</Text>
          </VStack>
        </Stack>
      </Flex>
    </VStack>
  );
};

export default Experience;