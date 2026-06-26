import {
  Flex,
  Text,
  Spacer,
  ButtonGroup,
  Button,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

function LanguageToggleButton() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko');
  }

  return (
    <Button variant="ghost" onClick={toggleLanguage}>
      {t('koreanToggle')}
    </Button>
  );
}

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button colorScheme="brandBlue" onClick={toggleColorMode}>
      {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default function Footer() {
  const nowYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <Flex p="20px" h="full" alignItems="center">
      <Text fontWeight="medium">
        {t('allRightsReserved', { year: nowYear })}
      </Text>
      <Spacer />
      <ButtonGroup>
        <LanguageToggleButton />
        <ThemeToggleButton />
      </ButtonGroup>
    </Flex>
  );
}
