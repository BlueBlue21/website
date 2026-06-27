import { EmailIcon } from "@chakra-ui/icons";
import {
	AspectRatio,
	Box,
	Button,
	ButtonGroup,
	Heading,
	Highlight,
	Image,
	Text,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Title from "../components/Title";

import { config } from "../config";
import { DiscordIcon, GitHubIcon } from "../icons";

export default function Home() {
	const { t } = useTranslation();
	const { getDisclosureProps, getButtonProps } = useDisclosure();
	const buttonProps = getButtonProps();
	const disclosureProps = getDisclosureProps();
	const toast = useToast();
	const myAge = new Date().getFullYear() - 2008;
	function showToast(title: string, description: string) {
		toast({
			title: title,
			description: description,
			status: "info",
			duration: 3500,
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
	}
	function goToGitHub() {
		window.open(`https://github.com/${config.gitHubUsername}`);
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
					<Highlight
						query={["BlueBlue21!", "BlueBlue21"]}
						styles={{ color: "brandBlue.100" }}
					>
						{t("hiItsBlueBlue")}
					</Highlight>
				</Heading>
				<Text>{t("pronounsAge", { age: myAge })}</Text>
				<Text>{t("intro")}</Text>
			</Box>
			<Button {...buttonProps} colorScheme="blue">
				{t("techStack")}
			</Button>
			<Box {...disclosureProps} w="90%">
				<Heading fontSize="large" color="brandBlue.100">
					{t("myTechStack")}
				</Heading>
				<Text fontSize="small">
					{t("languages")}
					<br />
					{t("others")}
					<br />
					{t("tools")}
				</Text>
			</Box>
			<ButtonGroup variant="outline" spacing="5px">
				<Button colorScheme="blue" onClick={email}>
					<EmailIcon />
				</Button>
				<Button colorScheme="purple" onClick={discord}>
					<DiscordIcon />
				</Button>
				<Button colorScheme="gray" onClick={goToGitHub}>
					<GitHubIcon />
				</Button>
			</ButtonGroup>
		</Card>
	);
}
