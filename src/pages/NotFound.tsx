import { useNavigate } from "react-router-dom";
import { Heading, AspectRatio, Image, Text, Button } from "@chakra-ui/react";

import Title from "../components/Title";
import Card from "../components/Card";

export default function NotFound() {
  const navigate = useNavigate();
  Title("BlueBlue21! - Not Found");
  function backToHome() {
    navigate("/");
  }
  return (
    <Card height="auto">
      <Heading fontSize="x-large" color="brandBlue.100">
        404 - Not Found!
      </Heading>
      <AspectRatio w="full" ratio={5 / 3}>
        <Image
          src="https://64.media.tumblr.com/7c7d540bd1434c729de056d30390afcc/tumblr_noz0mc2n7X1r83d7lo3_540.gifv"
          alt="Lol!"
          borderRadius="lg"
          boxShadow="base"
        />
      </AspectRatio>
      <Text>* I do not interested in politics.</Text>
      <Button colorScheme="blue" onClick={backToHome}>
        Back to home
      </Button>
    </Card>
  );
}
