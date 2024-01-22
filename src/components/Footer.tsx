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

function LanguageToggleButton() {
  const toast = useToast();
  function showToast() {
    toast({
      title: "미안해요...",
      description: "아직 한국어 페이지를 만들지 못 했습니다...",
      status: "info",
      duration: 1500,
      isClosable: true,
    });
  }
  return (
    <Button variant="ghost" onClick={showToast}>
      한글
    </Button>
  );
}

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button colorScheme="blue" onClick={toggleColorMode}>
      {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

export default function Footer() {
  return (
    <Flex p="20px" h="full" alignItems="center">
      <Text fontWeight="medium">© 2024 BlueBlue. All rights reserved.</Text>
      <Spacer />
      <ButtonGroup>
        <LanguageToggleButton />
        <ThemeToggleButton />
      </ButtonGroup>
    </Flex>
  );
}
