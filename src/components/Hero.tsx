import { Heading, Stack, Text, VStack, Image, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import React from "react";

const Hero = () => {
	return (
		<Stack
			justify="center"
			gap={10}
			direction={{ base: "column-reverse", lg: "row" }}
			align="center"
		>
			<VStack
				alignItems={{ base: "center", lg: "flex-start" }}
				textAlign={{ base: "center", lg: "left" }}
				gap={4}
			>
				<Heading
					whiteSpace={"nowrap"}
					fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
				>
					<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString("Hi, I'm Marvin.").start();
						}}
					/>
				</Heading>
				<Text maxW="2xl" fontSize={{ base: "xs", lg: "md" }}>
					An aspiring Software Engineer with a Computer Science degree from the
					University of Melbourne.
				</Text>
				<Link to="socials" smooth>
					<Button bg="custom.100" size="lg" textColor="black">
						CONTACT ME
					</Button>
				</Link>
			</VStack>
			<Image src="/portrait.jpg" boxSize="300px" borderRadius="full" />
		</Stack>
	);
};

export default Hero;
