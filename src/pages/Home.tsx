import { Box, Flex, Image, Heading, Text, Button, chakra, useDisclosure } from "@chakra-ui/react";
import { Mail } from "lucide-react";
import { DiscordIcon, GitHubIcon, ReplitIcon } from "../icons";
import { toaster } from "../lib/toaster";
import { useLanguage } from "../contexts/LanguageContext";
import Title from "../components/Title";
import Card from "../components/Card";
import { config } from "../config";

export default function Home() {
  const { t, language } = useLanguage();
  const { open, onToggle } = useDisclosure();
  const myAge = new Date().getFullYear() - 2008;

  function showToast(title: string, description: string) {
    toaster.create({ title, description, type: "info", duration: 3500 });
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
      <Box w="100px" h="100px" borderRadius="full" overflow="hidden" boxShadow="lg">
        <Image src="/profile.png" alt="Me!" w="full" h="full" objectFit="cover" />
      </Box>
      <Box>
        <Heading fontSize="xl">
          {t.home.greeting.split("BlueBlue21")[0]}
          <chakra.span color="brandBlue.100">BlueBlue21</chakra.span>
          {t.home.greeting.split("BlueBlue21")[1]}
        </Heading>
        <Text>
          {t.home.gender}, {myAge}
          {language === "ko" ? t.home.ageUnit : ` ${t.home.ageUnit}.`}
        </Text>
        <Text>{t.home.bio}</Text>
      </Box>
      <Button colorPalette="brandBlue" onClick={onToggle}>
        {t.home.techStack}
      </Button>
      {open && (
        <Box w="90%">
          <Heading fontSize="lg" color="brandBlue.100">
            {t.home.techStackTitle}
          </Heading>
          <Text fontSize="sm">
            {t.home.techStackLangs}
            <br />
            {t.home.techStackOthers}
            <br />
            {t.home.techStackTools}
          </Text>
          <Text fontWeight="bold" fontSize="xs">
            {t.home.techStackNote}
          </Text>
        </Box>
      )}
      <Flex gap="3">
        <Button variant="outline" colorPalette="brandBlue" onClick={email}>
          <Mail size={16} />
        </Button>
        <Button variant="outline" colorPalette="purple" onClick={discord}>
          <DiscordIcon size={16} />
        </Button>
        <Button variant="outline" colorPalette="gray" onClick={goToGitHub}>
          <GitHubIcon size={16} />
        </Button>
        <Button variant="outline" colorPalette="orange" onClick={goToReplit}>
          <ReplitIcon size={16} />
        </Button>
      </Flex>
    </Card>
  );
}
