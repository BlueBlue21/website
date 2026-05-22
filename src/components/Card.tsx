import { Box, Flex } from "@chakra-ui/react";

export default function Card({
  height,
  scrollY,
  children,
}: {
  height: string;
  scrollY: boolean;
  children: React.ReactNode;
}) {
  return (
    <Box
      p="20px"
      w={{ base: "300px", md: "450px" }}
      h={height}
      overflowY={scrollY ? "scroll" : "hidden"}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="base"
    >
      <Flex direction="column" align="center" textAlign="center" gap="2">
        {children}
      </Flex>
    </Box>
  );
}
