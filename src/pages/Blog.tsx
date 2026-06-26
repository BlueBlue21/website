import { useState, useEffect } from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import { Heading, Text, Box, Link, Flex, Divider, Skeleton } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

import Title from "../components/Title";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

import { posts } from "./posts";

export default function Blog() {
  const { t } = useTranslation();
  const { id } = useParams<{ id?: string }>();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const post = posts.find((p) => p.id === id);
      if (post) {
        post.content().then((mod) => setContent(mod.default));
      } else {
        setContent("Post not found");
      }
    }
  }, [id]);

  Title("BlueBlue21! - Blog");

  if (id) {
    return (
      <Card height="500px" scrollY={true}>
        <Skeleton isLoaded={content !== null} minHeight="200px" width="100%">
          <Box textAlign="left" w="100%">
            <ReactMarkdown>{content || ""}</ReactMarkdown>
          </Box>
        </Skeleton>
        <Link as={ReactRouterLink} to="/blog" color="brandBlue.100" mt="4">
          {t("backToHome")}
        </Link>
      </Card>
    );
  }

  return (
    <Card height="500px" scrollY={true}>
      <Heading fontSize="x-large" color="brandBlue.100">
        {t("blog")}
      </Heading>
      <Divider />
      <Flex direction="column" gap="3" w="100%">
        {posts.map((post) => (
          <Box key={post.id} textAlign="left">
            <Link
              as={ReactRouterLink}
              to={`/blog/${post.id}`}
              fontWeight="semibold"
              fontSize="large"
              color="brandBlue.100"
              _hover={{ textDecoration: "none", color: "brandBlue.200" }}
            >
              {post.title}
            </Link>
            <Text fontSize="sm" color="gray.500">{post.date}</Text>
            <Text>{post.description}</Text>
          </Box>
        ))}
      </Flex>
    </Card>
  );
}
