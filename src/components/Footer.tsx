import {
  Flex,
  Text,
  Spacer,
  ButtonGroup,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useLanguage } from "../contexts/LanguageContext";

function LanguageToggleButton() {
  const { t, toggleLanguage } = useLanguage();
  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      {t.footer.language}
    </Button>
  );
}

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button colorScheme="brandBlue" onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const nowYear = new Date().getFullYear();
  return (
    <Flex p="20px" h="full" alignItems="center">
      <Text fontWeight="medium">
        © {nowYear} BlueBlue. {t.footer.copyright}
      </Text>
      <Spacer />
      <ButtonGroup>
        <LanguageToggleButton />
        <ThemeToggleButton />
      </ButtonGroup>
    </Flex>
  );
}
