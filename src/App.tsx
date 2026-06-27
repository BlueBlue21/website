import { Center, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Fonts from "./fonts";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import theme from "./theme";

export default function App() {
	return (
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Fonts />
				<Grid
					templateAreas={`"navbar"
                            "main"
                            "footer"`}
					gridTemplateRows={"70px 1fr 70px"}
					h="100vh"
				>
					<GridItem area={"navbar"} m="10px">
						<Navbar />
					</GridItem>
					<GridItem area={"main"}>
						<Center h="full">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/blog" element={<Blog />} />
								<Route path="/blog/:id" element={<Blog />} />
								<Route path="/projects" element={<Projects />} />
								<Route path="/*" element={<NotFound />} />
							</Routes>
						</Center>
					</GridItem>
					<GridItem area={"footer"}>
						<Footer />
					</GridItem>
				</Grid>
			</ChakraProvider>
		</BrowserRouter>
	);
}
