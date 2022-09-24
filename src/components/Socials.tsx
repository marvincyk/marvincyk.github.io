import { HStack, Icon, Link } from "@chakra-ui/react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import React from "react";

const Socials = () => {
  return (
    <HStack justify="center" spacing={10}>
      <Link href="https://github.com/marvincyk" target="_blank">
        <Icon as={FaGithubSquare} boxSize="40px" color="custom.200" />
      </Link>
      <Link href="https://www.linkedin.com/in/marvincyk/" target="_blank">
        <Icon as={FaLinkedin} boxSize="40px" color="custom.200" />
      </Link>
      <Link href="https://www.facebook.com/marvincyk77" target="_blank">
        <Icon as={FaFacebookSquare} boxSize="40px" color="custom.200" />
      </Link>
      <Link href="https://www.instagram.com/marvincyk/" target="_blank">
        <Icon as={FaInstagramSquare} boxSize="40px" color="custom.200" />
      </Link>
    </HStack>
  );
};

export default Socials;
