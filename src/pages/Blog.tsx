import { Heading, Text, Button } from "@chakra-ui/react";

import Title from "../components/Title";
import Card from "../components/Card";

import { config } from "../config";

export default function NotFound() {
  function goToVelog() {
    window.open(`https://velog.io/@${config.velogUsername}/posts`);
  }
  Title("BlueBlue21! - Blog");
  return (
    <Card height="auto" scrollY={false}>
      <Heading fontSize="x-large" color="brandBlue.100">
        Coming Soon!
      </Heading>
      <Text>First you can see my blog in Velog.</Text>
      <Button colorScheme="green" onClick={goToVelog}>
        Go to Velog
      </Button>
    </Card>
  );
}
