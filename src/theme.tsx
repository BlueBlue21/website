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
      100: "#1f75f5",
      200: "#125dcc",
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
