import { useQuery } from "@tanstack/react-query";
import {
  Heading,
  Separator,
  Text,
  Button,
  Box,
  Link,
  Flex,
  Badge,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Title from "../components/Title";
import Card from "../components/Card";
import { useLanguage } from "../contexts/LanguageContext";
import { config } from "../config";

interface VelogPost {
  id: string;
  title: string;
  short_description: string;
  url_slug: string;
  released_at: string;
  tags: string[];
}

async function fetchVelogPosts(username: string): Promise<VelogPost[]> {
  const res = await fetch("https://v2.velog.io/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query Posts($username: String) {
        posts(username: $username) {
          id title short_description url_slug released_at tags
        }
      }`,
      variables: { username },
    }),
  });
  const json = await res.json();
  return json.data?.posts ?? [];
}

export default function Blog() {
  const { t } = useLanguage();
  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["velogPosts", config.velogUsername],
    queryFn: () => fetchVelogPosts(config.velogUsername),
  });

  Title(`BlueBlue21! - ${t.blog.title}`);

  function goToVelog() {
    window.open(`https://velog.io/@${config.velogUsername}/posts`);
  }

  if (isPending) {
    return (
      <Card height="500px" scrollY={true}>
        <Heading fontSize="xl" color="brandBlue.100">
          {t.blog.title}
        </Heading>
        <Separator />
        <Flex direction="column" gap="4" w="full">
          {Array.from({ length: 5 }).map((_, i) => (
            <Box key={i} textAlign="left" w="full">
              <Skeleton height="22px" mb="2" borderRadius="md" />
              <SkeletonText noOfLines={2} gap="2" />
            </Box>
          ))}
        </Flex>
      </Card>
    );
  }

  if (error || !posts) {
    return (
      <Card height="auto" scrollY={false}>
        <Heading fontSize="xl" color="red.500">
          {t.blog.error}
        </Heading>
        <Button colorPalette="brandBlue" onClick={goToVelog}>
          {t.blog.goToVelog}
        </Button>
      </Card>
    );
  }

  if (posts.length === 0) {
    return (
      <Card height="auto" scrollY={false}>
        <Heading fontSize="xl" color="brandBlue.100">
          {t.blog.comingSoon}
        </Heading>
        <Text>{t.blog.velogPrompt}</Text>
        <Button colorPalette="brandBlue" onClick={goToVelog}>
          {t.blog.goToVelog}
        </Button>
      </Card>
    );
  }

  return (
    <Card height="500px" scrollY={true}>
      <Heading fontSize="xl" color="brandBlue.100">
        {t.blog.title}
      </Heading>
      <Separator />
      <Flex direction="column" gap="4" w="full">
        {posts.map((post) => (
          <Box key={post.id} textAlign="left">
            <Link
              href={`https://velog.io/@${config.velogUsername}/${post.url_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              fontWeight="semibold"
              fontSize="lg"
              color="brandBlue.100"
              _hover={{ textDecoration: "none", color: "brandBlue.200" }}
            >
              {post.title}
            </Link>
            <Text fontSize="xs" color="fg.muted" mt="1">
              {new Date(post.released_at).toLocaleDateString()}
            </Text>
            <Text fontSize="sm" mt="1">
              {post.short_description || t.blog.noDesc}
            </Text>
            {post.tags.length > 0 && (
              <Flex gap="1" mt="2" flexWrap="wrap">
                {post.tags.map((tag) => (
                  <Badge key={tag} size="sm" colorPalette="brandBlue">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            )}
          </Box>
        ))}
      </Flex>
    </Card>
  );
}
