import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Grid, GridItem, Center } from "@chakra-ui/react";

import theme from "./theme";
import Fonts from "./fonts";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

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
