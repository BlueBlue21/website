import {
  extendTheme,
  type ThemeConfig,
  type StyleFunctionProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Sora", "NanumSquareNeo-Variable"`,
    body: `"Sora", "NanumSquareNeo-Variable"`,
  },
  colors: {
    brandBlue: {
      50: "#e3f2fd",
      100: "#1f75f5",
      200: "#125dcc",
      300: "#1052b5",
      400: "#0d47a1",
      500: "#1f75f5",
      600: "#125dcc",
      700: "#1052b5",
      800: "#0d47a1",
      900: "#0a3c87",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#fefefe", "#252525")(props),
      },
    }),
  },
});

export default theme;
