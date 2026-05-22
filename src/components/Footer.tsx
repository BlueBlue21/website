import { useState, useEffect } from "react";
import { Flex, Text, Spacer, Group, Button } from "@chakra-ui/react";
import { Sun, Moon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

function useColorMode() {
  const [colorMode, setColorMode] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorMode]);

  function toggleColorMode() {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return { colorMode, toggleColorMode };
}

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
    <Button colorPalette="brandBlue" onClick={toggleColorMode}>
      {colorMode === "light" ? <Moon size={16} /> : <Sun size={16} />}
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
      <Group>
        <LanguageToggleButton />
        <ThemeToggleButton />
      </Group>
    </Flex>
  );
}
