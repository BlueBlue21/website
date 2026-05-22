import { useNavigate } from "react-router-dom";
import { Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import Title from "../components/Title";
import Card from "../components/Card";
import { useLanguage } from "../contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  Title("BlueBlue21! - Not Found");
  return (
    <Card height="auto" scrollY={false}>
      <Heading fontSize="xl" color="brandBlue.100">
        {t.notFound.title}
      </Heading>
      <Box w="full" style={{ aspectRatio: "5/3" }}>
        <Image
          src="https://64.media.tumblr.com/7c7d540bd1434c729de056d30390afcc/tumblr_noz0mc2n7X1r83d7lo3_540.gifv"
          alt="Lol!"
          w="full"
          h="full"
          objectFit="cover"
          borderRadius="lg"
          boxShadow="base"
        />
      </Box>
      <Text>{t.notFound.note}</Text>
      <Button colorPalette="brandBlue" onClick={backToHome}>
        {t.notFound.backToHome}
      </Button>
    </Card>
  );
}
