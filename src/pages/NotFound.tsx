import { AspectRatio, Button, Heading, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Title from "../components/Title";

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
			<AspectRatio w="full" ratio={5 / 6}>
				<Image
					src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTExYnE3YmpnN2h1Y3drMmp5a2tmZnVpeDMwN285aTJvMTFxcmhtYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/byhDAQMWOqkqemLrvq/giphy.gif"
					alt="404!"
					borderRadius="lg"
					boxShadow="base"
				/>
			</AspectRatio>
			<Button colorScheme="blue" onClick={backToHome}>
				{t("backToHome")}
			</Button>
		</Card>
	);
}
