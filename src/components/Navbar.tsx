import { Link as RouterLink, NavLink } from "react-router-dom";
import { chakra, Flex, Link, Spacer } from "@chakra-ui/react";
import { useLanguage } from "../contexts/LanguageContext";

function NavLinkButton({ href, children }: { href: string; children: string }) {
  return (
    <NavLink to={href} style={{ textDecoration: "none" }}>
      {({ isActive }: { isActive: boolean }) => (
        <chakra.span
          fontWeight="medium"
          fontSize="lg"
          color={isActive ? "brandBlue.100" : undefined}
          _hover={{ color: "brandBlue.100" }}
          transition="colors 0.15s"
        >
          {children}
        </chakra.span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  return (
    <Flex p="10px" h="full" alignItems="center" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Link
        asChild
        fontWeight="semibold"
        fontSize="xl"
        color="brandBlue.100"
        _hover={{ color: "brandBlue.200", textDecoration: "none" }}
      >
        <RouterLink to="/">BlueBlue21</RouterLink>
      </Link>
      <Spacer />
      <Flex gap="4">
        <NavLinkButton href="/blog">{t.nav.blog}</NavLinkButton>
        <NavLinkButton href="/projects">{t.nav.projects}</NavLinkButton>
      </Flex>
    </Flex>
  );
}
