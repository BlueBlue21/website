import { Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";

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
	const { t } = useTranslation();
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
				<NavLinkButton href="/blog">{t("blog")}</NavLinkButton>
				<NavLinkButton href="/projects">{t("projects")}</NavLinkButton>
			</Flex>
		</Flex>
	);
}
