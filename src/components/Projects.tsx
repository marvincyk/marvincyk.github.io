import { Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function Projects() {
	const cards = [
		{
			title: "PocketDex",
			text: "A mobile application that simulates a Pokédex from the Pokémon franchise.",
			link: "https://github.com/marvincyk/PocketDex",
		},
		{
			title: "Life of a Programmer",
			text: "A first-person speed runner game centred around running through code to catch a bug at the end of the level.",
			link: "https://github.com/rpuhalovich/life_of_a_programmer.exe",
		},
		{
			title: "+EV Poker Coaching",
			text: "A freelance web project I built for a poker coaching organisation.",
			link: "https://plus-ev-poker-coaching.vercel.app/",
		},
	];

	return (
		<VStack spacing={10} alignItems="center" pt={4}>
			<Heading
				alignSelf="center"
				fontSize={{ base: "2xl", lg: "4xl" }}
				pl={{ base: 8, md: 0 }}
			>
				<Typewriter
					onInit={(typewriter) => {
						typewriter.pauseFor(7500).typeString("projects").start();
					}}
				/>
			</Heading>
			<Flex
				flexDir="column"
				gap={20}
				align="center"
				fontSize={{ base: "xs", lg: "md" }}
			>
				{cards.map((card) => (
					<Link
						href={card.link}
						isExternal
						bgColor="whiteAlpha.300"
						minW="full"
						p={8}
						rounded="xl"
						_hover={{
							textDecoration: "none",
							textColor: "white",
						}}
						display="flex"
						flexDir="column"
						gap={4}
					>
						<Heading>{card.title}</Heading>
						<Text>{card.text}</Text>
					</Link>
				))}
			</Flex>
		</VStack>
	);
}
