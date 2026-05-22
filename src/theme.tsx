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
      50: "#e8f1fe",
      100: "#1f75f5",
      200: "#125dcc",
      300: "#6397f6",
      400: "#3f7cf4",
      500: "#1f75f5",
      600: "#125dcc",
      700: "#0e4fb0",
      800: "#0a3e8c",
      900: "#072d68",
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
