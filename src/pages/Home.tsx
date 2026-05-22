import {
  AspectRatio,
  Image,
  Box,
  Heading,
  Highlight,
  Text,
  Button,
  ButtonGroup,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

import Title from "../components/Title";
import Card from "../components/Card";
import { DiscordIcon, GitHubIcon, ReplitIcon } from "../icons";
import { useLanguage } from "../contexts/LanguageContext";

import { config } from "../config";

export default function Home() {
  const { t, language } = useLanguage();
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const toast = useToast();
  const myAge = new Date().getFullYear() - 2008;

  function showToast(title: string, description: string) {
    toast({
      title,
      description,
      status: "info",
      duration: 3500,
      isClosable: true,
    });
  }
  function email() {
    showToast(t.toast.emailTitle, config.email);
    location.href = `mailto:${config.email}`;
  }
  function discord() {
    showToast(t.toast.discordTitle, config.discordUsername);
  }
  function goToGitHub() {
    window.open(`https://github.com/${config.gitHubUsername}`);
  }
  function goToReplit() {
    window.open(`https://replit.com/@${config.replitUsername}`);
  }

  Title("BlueBlue21!");
  return (
    <Card height="auto" scrollY={false}>
      <AspectRatio w="100px" ratio={1 / 1}>
        <Image
          src="/profile.png"
          alt="Me!"
          objectFit="cover"
          borderRadius="full"
          boxShadow="lg"
        />
      </AspectRatio>
      <Box>
        <Heading fontSize="xl">
          <Highlight query="BlueBlue21!" styles={{ color: "brandBlue.100" }}>
            {t.home.greeting}
          </Highlight>
        </Heading>
        <Text>
          {t.home.gender}, {myAge}
          {language === "ko" ? t.home.ageUnit : ` ${t.home.ageUnit}.`}
        </Text>
        <Text>{t.home.bio}</Text>
      </Box>
      <Button {...buttonProps} colorScheme="brandBlue">
        {t.home.techStack}
      </Button>
      <Box {...disclosureProps} w="90%">
        <Heading fontSize="large" color="brandBlue.100">
          {t.home.techStackTitle}
        </Heading>
        <Text fontSize="small">
          {t.home.techStackLangs}
          <br />
          {t.home.techStackOthers}
          <br />
          {t.home.techStackTools}
        </Text>
        <Text fontWeight="bold" fontSize="x-small">
          {t.home.techStackNote}
        </Text>
      </Box>
      <ButtonGroup variant="outline" spacing="5px">
        <Button colorScheme="brandBlue" onClick={email}>
          <EmailIcon />
        </Button>
        <Button colorScheme="purple" onClick={discord}>
          <DiscordIcon />
        </Button>
        <Button colorScheme="gray" onClick={goToGitHub}>
          <GitHubIcon />
        </Button>
        <Button colorScheme="orange" onClick={goToReplit}>
          <ReplitIcon />
        </Button>
      </ButtonGroup>
    </Card>
  );
}
