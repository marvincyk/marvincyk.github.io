import {
	Box,
	Container,
	Heading,
	IconButton,
	Link,
	Stack,
	Text,
	VStack,
	useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Typewriter from "typewriter-effect";

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
};

export default function Projects() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: "90%", md: "50%" });
	const side = useBreakpointValue({ base: "30%", md: "40px" });

	// This list contains all the data for carousels
	// This can be static or loaded from a server
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
			<Box
				position={"relative"}
				height={"600px"}
				width={"full"}
				overflow={"hidden"}
				borderRadius="lg"
			>
				{/* CSS files for react-slick */}
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				{/* Left Icon */}
				<IconButton
					aria-label="left-arrow"
					variant="ghost"
					position="absolute"
					left={side}
					top={top}
					transform={"translate(0%, -50%)"}
					zIndex={2}
					onClick={() => slider?.slickPrev()}
					_hover={{
						background: "whiteAlpha.300",
					}}
				>
					<BiLeftArrowAlt size="40px" color="green" />
				</IconButton>
				{/* Right Icon */}
				<IconButton
					aria-label="right-arrow"
					variant="ghost"
					position="absolute"
					right={side}
					top={top}
					transform={"translate(0%, -50%)"}
					zIndex={2}
					onClick={() => slider?.slickNext()}
					_hover={{
						background: "whiteAlpha.300",
					}}
				>
					<BiRightArrowAlt size="40px" color="green" />
				</IconButton>
				{/* Slider */}
				<Slider {...settings} ref={(slider) => setSlider(slider)}>
					{cards.map((card, index) => (
						<Box
							key={index}
							height={"6xl"}
							position="relative"
							backgroundPosition="center"
							backgroundRepeat="no-repeat"
							backgroundSize="cover"
							backgroundColor="whiteAlpha.100"
						>
							<Link href={card.link} isExternal>
								{/* This is the block you need to change, to customize the caption */}
								<Container
									size="container.lg"
									height="600px"
									position="relative"
								>
									<Stack
										spacing={6}
										w={"full"}
										maxW={"lg"}
										position="absolute"
										top="50%"
										transform="translate(0, -50%)"
									>
										<Heading
											fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
											whiteSpace={{ lg: "nowrap" }}
										>
											{card.title}
										</Heading>
										<Text fontSize={{ base: "md", lg: "lg" }}>{card.text}</Text>
									</Stack>
								</Container>
							</Link>
						</Box>
					))}
				</Slider>
			</Box>
		</VStack>
	);
}
