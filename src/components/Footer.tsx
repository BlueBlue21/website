import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Button,
	ButtonGroup,
	Flex,
	Spacer,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function LanguageToggleButton() {
	const { t, i18n } = useTranslation();

	function toggleLanguage() {
		i18n.changeLanguage(i18n.language === "ko-KR" ? "en-US" : "ko-KR");
	}

	return (
		<Button variant="ghost" onClick={toggleLanguage}>
			{t("languageToggle")}
		</Button>
	);
}

function ThemeToggleButton() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Button colorScheme="blue" onClick={toggleColorMode}>
			{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
		</Button>
	);
}

export default function Footer() {
	const nowYear = new Date().getFullYear();
	const { t } = useTranslation();
	return (
		<Flex p="20px" h="full" alignItems="center">
			<Text fontWeight="medium">
				{t("allRightsReserved", { year: nowYear })}
			</Text>
			<Spacer />
			<ButtonGroup>
				<LanguageToggleButton />
				<ThemeToggleButton />
			</ButtonGroup>
		</Flex>
	);
}
