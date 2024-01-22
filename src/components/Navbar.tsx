import { Link as ReactRouterLink, NavLink } from "react-router-dom";
import { Flex, Link as ChakraLink, Spacer } from "@chakra-ui/react";

interface NavLinkButtonProps {
  href: string;
  children: string;
}

function NavLinkButton({ href, children }: NavLinkButtonProps) {
  return (
    <ChakraLink
      as={NavLink}
      to={href}
      fontWeight="medium"
      fontSize="large"
      _hover={{ textDecoration: "none", color: "brandBlue.100" }}
      _activeLink={{ color: "brandBlue.100" }}
    >
      {children}
    </ChakraLink>
  );
}

export default function Navbar() {
  return (
    <Flex
      p="10px"
      h="full"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <ChakraLink
        as={ReactRouterLink}
        to="/"
        fontWeight="semibold"
        fontSize="x-large"
        color="brandBlue.100"
        _hover={{ textDecoration: "none", color: "brandBlue.200" }}
      >
        BlueBlue21
      </ChakraLink>
      <Spacer />
      <Flex gap="2">
        <NavLinkButton href="/blog">Blog</NavLinkButton>
        <NavLinkButton href="/projects">Projects</NavLinkButton>
      </Flex>
    </Flex>
  );
}
