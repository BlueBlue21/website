import {
	Box,
	Divider,
	Flex,
	Heading,
	Link,
	Skeleton,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import Title from "../components/Title";

import { config } from "../config";
import { GitHubIcon } from "../icons";

export default function NotFound() {
	const { t } = useTranslation();
	const [links, changeLinks] = useState<string[]>([]);
	const [names, changeNames] = useState<string[]>([]);
	const [descriptions, changeDescriptions] = useState<string[]>([]);
	const { isPending, error, data } = useQuery({
		queryKey: ["reposData"],
		queryFn: () =>
			fetch(`https://api.github.com/users/${config.gitHubUsername}/repos`).then(
				(res) => res.json(),
			),
	});
	useEffect(() => {
		if (data) {
			changeLinks(data.map((repo: { html_url: string }) => repo.html_url));
			changeNames(data.map((repo: { name: string }) => repo.name));
			changeDescriptions(
				data.map((repo: { description: string }) => repo.description),
			);
		}
	}, [data]);
	Title("BlueBlue21! - Projects");
	return (
		<Card height="500px" scrollY={true}>
			{error ? (
				<Heading fontSize="x-large" color="red.500">
					{t("error")}
				</Heading>
			) : (
				<Heading fontSize="x-large" color="brandBlue.100">
					{t("projects")}
				</Heading>
			)}
			<Divider />
			<Skeleton isLoaded={!isPending} minHeight="200px">
				<Flex direction="column" gap="3">
					{names.map((value, index) => (
						<Box key={value}>
							<Link
								href={links[index]}
								isExternal
								fontWeight="semibold"
								fontSize="large"
								color="brandBlue.100"
								_hover={{ textDecoration: "none", color: "brandBlue.200" }}
							>
								{value} <GitHubIcon mx="2px" />
							</Link>
							<Text>{descriptions[index]}</Text>
						</Box>
					))}
				</Flex>
			</Skeleton>
		</Card>
	);
}
