import {
	Box,
	HStack,
	Image,
	List,
	ListItem,
	useDisclosure,
	IconButton,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerBody,
	DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box as="nav">
			<HStack justify="space-between" align="center">
				<Image src="/logo.svg" w="300px" h="60px" ml={-16} />
				<IconButton
					aria-label="Toggle navigation menu"
					icon={<HamburgerIcon w={10} h={10} />}
					variant="unstyled"
					colorScheme="green"
					display={{ lg: "none" }}
					onClick={onOpen}
				/>
				<Drawer placement="right" onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton color="custom.200" size="lg" />
						<DrawerBody bgColor="black" textColor="custom.200">
							<List
								display="flex"
								flexDirection="column"
								gap={20}
								alignItems="center"
								mt={20}
							>
								<NavItems onClose={onClose} />
							</List>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<List display={{ base: "none", lg: "flex" }} gap={20}>
					<NavItems onClose={onClose} />
				</List>
			</HStack>
		</Box>
	);
};

interface NavItemsProps {
	onClose: () => void;
}

const NavItems = ({ onClose }: NavItemsProps) => {
	return (
		<>
			<Link to="services" smooth>
				<ListItem
					_hover={{
						cursor: "pointer",
						color: "white",
					}}
					transition="color 200ms"
					onClick={onClose}
				>
					services
				</ListItem>
			</Link>
			<Link to="education" smooth>
				<ListItem
					_hover={{
						cursor: "pointer",
						color: "white",
					}}
					transition="color 200ms"
					onClick={onClose}
				>
					education
				</ListItem>
			</Link>
			<Link to="experience" smooth>
				<ListItem
					_hover={{
						cursor: "pointer",
						color: "white",
					}}
					transition="color 200ms"
					onClick={onClose}
				>
					experience
				</ListItem>
			</Link>
			<Link to="projects" smooth>
				<ListItem
					_hover={{
						cursor: "pointer",
						color: "white",
					}}
					transition="color 200ms"
					onClick={onClose}
				>
					projects
				</ListItem>
			</Link>
		</>
	);
};

export default Navbar;
