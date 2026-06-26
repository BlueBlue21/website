import { useNavigate } from "react-router-dom";
import { Heading, AspectRatio, Image, Text, Button } from "@chakra-ui/react";

import Title from "../components/Title";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  function backToHome() {
    navigate("/");
  }
  Title("BlueBlue21! - Not Found");
  return (
    <Card height="auto" scrollY={false}>
      <Heading fontSize="x-large" color="brandBlue.100">
        {t("notFound")}
      </Heading>
      <AspectRatio w="full" ratio={5 / 3}>
        <Image
          src="https://64.media.tumblr.com/7c7d540bd1434c729de056d30390afcc/tumblr_noz0mc2n7X1r83d7lo3_540.gifv"
          alt="Lol!"
          borderRadius="lg"
          boxShadow="base"
        />
      </AspectRatio>
      <Text>{t("notInterestedPolitics")}</Text>
      <Button colorScheme="brandBlue" onClick={backToHome}>
        {t("backToHome")}
      </Button>
    </Card>
  );
}
