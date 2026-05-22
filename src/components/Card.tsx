import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
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
    </motion.div>
  );
}
