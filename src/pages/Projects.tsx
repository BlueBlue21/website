import { useQuery } from "@tanstack/react-query";
import {
  Heading,
  Separator,
  Skeleton,
  SkeletonText,
  Flex,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import Title from "../components/Title";
import Card from "../components/Card";
import { GitHubIcon } from "../icons";
import { useLanguage } from "../contexts/LanguageContext";
import { config } from "../config";

interface GitHubRepo {
  html_url: string;
  name: string;
  description: string | null;
}

export default function Projects() {
  const { t } = useLanguage();
  const { isPending, error, data } = useQuery<GitHubRepo[]>({
    queryKey: ["reposData"],
    queryFn: () =>
      fetch(`https://api.github.com/users/${config.gitHubUsername}/repos`).then((res) =>
        res.json()
      ),
  });

  Title(`BlueBlue21! - ${t.projects.title}`);

  return (
    <Card height="500px" scrollY={true}>
      {error ? (
        <Heading fontSize="xl" color="red.500">
          {t.projects.error}
        </Heading>
      ) : (
        <Heading fontSize="xl" color="brandBlue.100">
          {t.projects.title}
        </Heading>
      )}
      <Separator />
      {isPending ? (
        <Flex direction="column" gap="3" w="full">
          {Array.from({ length: 8 }).map((_, i) => (
            <Box key={i} textAlign="left" w="full">
              <Skeleton height="22px" mb="1" borderRadius="md" />
              <SkeletonText noOfLines={1} gap="1" />
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex direction="column" gap="3" w="full">
          {(data ?? []).map((repo, index) => (
            <Box key={index} textAlign="left">
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                fontWeight="semibold"
                fontSize="lg"
                color="brandBlue.100"
                _hover={{ textDecoration: "none", color: "brandBlue.200" }}
              >
                {repo.name} <GitHubIcon size={14} />
              </Link>
              <Text fontSize="sm">{repo.description}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </Card>
  );
}
