import { HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";

const Socials = () => {
	return (
		<VStack spacing={4}>
			<HStack justify="center" spacing={10}>
				<Link href="https://github.com/marvincyk" target="_blank">
					<Icon
						as={FaGithubSquare}
						boxSize="40px"
						color="custom.200"
						_hover={{
							color: "white",
						}}
						transition="color 200ms"
					/>
				</Link>
				<Link href="https://www.linkedin.com/in/marvincyk/" target="_blank">
					<Icon
						as={FaLinkedin}
						boxSize="40px"
						color="custom.200"
						_hover={{
							color: "white",
						}}
						transition="color 200ms"
					/>
				</Link>
				<Link href="mailto:marvin@marvincyk.com" target="_blank">
					<Icon
						as={ImMail}
						boxSize="40px"
						color="custom.200"
						_hover={{
							color: "white",
						}}
					/>
				</Link>
				<Link href="https://www.facebook.com/marvincyk77" target="_blank">
					<Icon
						as={FaFacebookSquare}
						boxSize="40px"
						color="custom.200"
						_hover={{
							color: "white",
						}}
						transition="color 200ms"
					/>
				</Link>
				<Link href="https://www.instagram.com/marvincyk/" target="_blank">
					<Icon
						as={FaInstagramSquare}
						boxSize="40px"
						color="custom.200"
						_hover={{
							color: "white",
						}}
						transition="color 200ms"
					/>
				</Link>
			</HStack>
			<Text>{`©️ 2022 – ${new Date().getFullYear()} Marvin Chew`}</Text>
		</VStack>
	);
};

export default Socials;
