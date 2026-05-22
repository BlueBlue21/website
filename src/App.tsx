import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ChakraProvider, Grid, GridItem, Center, Toaster, Toast } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { system } from "./theme";
import { toaster } from "./lib/toaster";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ChakraProvider value={system}>
        <LanguageProvider>
          <Toaster toaster={toaster}>
            {(toast) => (
              <Toast.Root key={toast.id}>
                <Toast.Indicator />
                <Toast.Title>{toast.title as string}</Toast.Title>
                {toast.description && (
                  <Toast.Description>{toast.description as string}</Toast.Description>
                )}
                <Toast.CloseTrigger />
              </Toast.Root>
            )}
          </Toaster>
          <Grid
            templateAreas={`"navbar" "main" "footer"`}
            gridTemplateRows="70px 1fr 70px"
            h="100vh"
          >
            <GridItem area="navbar" m="10px">
              <Navbar />
            </GridItem>
            <GridItem area="main">
              <Center h="full">
                <AnimatedRoutes />
              </Center>
            </GridItem>
            <GridItem area="footer">
              <Footer />
            </GridItem>
          </Grid>
        </LanguageProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
