import Head from "next/head"
import Link from "next/link"
import { Center, Container, Box, Heading, Text, ButtonGroup, IconButton } from "@chakra-ui/react"
import { SiReplit } from "react-icons/si"
import { SiGithub } from "react-icons/si"

export default function Home() {
	return (
		<div>
			<Head>
				<title>BlueBlue21!</title>
				<meta name="description" content="Hi, It's BlueBlue21! 👋" />
				<meta property="og:title" content="BlueBlue21!" />
				<meta property="og:description" content="Hi, It's BlueBlue21! 👋" />
			</Head>
			<Center h="100vh">
				<Container>
					<Box textAlign="center">
						<Heading as="h3" size="lg" padding={1} color="white">{"Hi, It's"} <Text as="span" color="blue">BlueBlue21! 👋</Text></Heading>
						<Text fontSize="md" color="white">Born in South Korea!<br />He/His - Age : {((new Date()).getFullYear() - 2008)} Years Old<br />Discord : Busy Blue#1280</Text>
						<Box padding={2}>
							<ButtonGroup>
								<Link href="https://replit.com/@BlueBlue21" passHref>
									<IconButton size="lg" fontSize="2xl" variant="ghost" icon={<SiReplit />} color="white" />
								</Link>
								<Link href="https://github.com/BlueBlue21" passHref>
									<IconButton size="lg" fontSize="2xl" variant="ghost" icon={<SiGithub />} color="white" />
								</Link>
							</ButtonGroup>
						</Box>
					</Box>
				</Container>
			</Center>
		</div>
	)
}
