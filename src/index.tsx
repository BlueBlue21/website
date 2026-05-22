import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorModeScript } from "@chakra-ui/react";

import theme from "./theme";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ColorModeScript
      type="cookie"
      initialColorMode={theme.config.initialColorMode}
    />
    <App />
  </QueryClientProvider>
);
