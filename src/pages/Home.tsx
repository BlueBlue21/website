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

import { config } from "../config";

export default function Home() {
  const { getDisclosureProps, getButtonProps } = useDisclosure();
  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();
  const toast = useToast();
  const age = new Date().getFullYear() - 2008;
  function showToast(title: string, description: string) {
    toast({
      title: title,
      description: description,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }
  function email() {
    const email = config.email;
    showToast("Email", email);
    location.href = `mailto:${email}`;
  }
  function discord() {
    showToast("Discord", config.discordUsername);
    window.open(`https://discord.com/users/${config.discordId}`);
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
            Hi, It's BlueBlue21! 👋
          </Highlight>
        </Heading>
        <Text>He/his, {age} years old.</Text>
        <Text>
          I was born in Seoul, in South Korea. My dream is to be a happy
          developer... But I always waste my timee!
        </Text>
      </Box>
      <Button {...buttonProps} colorScheme="blue">
        Tech Stack
      </Button>
      <Box {...disclosureProps} w="90%">
        <Heading fontSize="large" color="brandBlue.100">
          My Tech Stack(Temp)
        </Heading>
        <Text fontSize="small">
          Languages : C, Go, Python, JavaScript, TypeScript, (HTML, CSS), etc.
          <br />
          Others : SQLite, MongoDB, Express, React, Next.js, Chakra UI, Fyne,
          Godot Engine, etc.
          <br />
          Tools : Neovim, Visual Studio, Visual Studio Code, Zed, (Some
          Jetbrains Produect), Blender, etc.
        </Text>
        <Text fontWeight="bold" fontSize="x-small">
          * BUT I'M SUPER NOOBB!
        </Text>
      </Box>
      <ButtonGroup variant="outline" spacing="5px">
        <Button colorScheme="blue" onClick={email}>
          <EmailIcon />
        </Button>
        <Button colorScheme="purple" onClick={discord}>
          <DiscordIcon />
        </Button>
        <Button colorScheme="grey" onClick={goToGitHub}>
          <GitHubIcon />
        </Button>
        <Button colorScheme="orange" onClick={goToReplit}>
          <ReplitIcon />
        </Button>
      </ButtonGroup>
    </Card>
  );
}
