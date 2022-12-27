import React from "react";
import {
	Box,
	IconButton,
	useBreakpointValue,
	Stack,
	Heading,
	Text,
	Container,
	VStack,
	Link,
} from "@chakra-ui/react";
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
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
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
			title: "Time is Money",
			text: "A motivating web app that shows you your salary as an incrementing counter.",
			image: "./Celestial.jpg",
			link: "https://www.timeismoney.pro/",
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
					<BiLeftArrowAlt size="40px" color="white" />
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
					<BiRightArrowAlt size="40px" color="white" />
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
							backgroundImage={`url(${card.image})`}
						>
							{/* This is the block you need to change, to customize the caption */}
							<Container size="container.lg" height="600px" position="relative">
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
										color="white"
										whiteSpace="nowrap"
									>
										{card.title}
									</Heading>
									<Text fontSize={{ base: "md", lg: "lg" }} color="white">
										{card.text}
									</Text>
									<Link
										color="whiteAlpha.700"
										href="https://www.timeismoney.pro/"
										isExternal
									>
										CLICK HERE TO LAUNCH PROJECT
									</Link>
								</Stack>
							</Container>
						</Box>
					))}
				</Slider>
			</Box>
		</VStack>
	);
}
