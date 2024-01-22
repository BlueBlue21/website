import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heading, Divider, Box, Link, Text, Flex } from "@chakra-ui/react";

import Title from "../components/Title";
import Card from "../components/Card";

import { config } from "../config";
import { GitHubIcon } from "../icons";

export default function NotFound() {
  const [links, changeLinks] = useState<string[]>([]);
  const [names, changeNames] = useState<string[]>([]);
  const [descriptions, changeDescriptions] = useState<string[]>([]);
  const { isPending, error, data } = useQuery({
    queryKey: ["reposData"],
    queryFn: () =>
      fetch(`https://api.github.com/users/${config.gitHubUsername}/repos`).then(
        (res) => res.json()
      ),
  });
  useEffect(() => {
    if (data) {
      changeLinks(data.map((repo: { html_url: string }) => repo.html_url));
      changeNames(data.map((repo: { name: string }) => repo.name));
      changeDescriptions(
        data.map((repo: { description: string }) => repo.description)
      );
    }
  }, [data]);
  Title("BlueBlue21! - Projects");
  return (
    <Card height="500px" scrollY={true}>
      {error ? (
        <Heading color="red.500" fontSize="x-large">
          Error!
        </Heading>
      ) : isPending ? (
        <Heading fontSize="x-large">Loading...</Heading>
      ) : (
        <Heading color="brandBlue.100" fontSize="x-large">
          Projects
        </Heading>
      )}
      <Divider />
      <Flex direction="column" gap="5">
        {names.map((value, index) => (
          <Box key={index}>
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
    </Card>
  );
}
