import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    body: {
      bg: { base: "#fefefe", _dark: "#252525" },
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `"Sora", "NanumSquareNeo-Variable"` },
        body: { value: `"Sora", "NanumSquareNeo-Variable"` },
      },
      colors: {
        brandBlue: {
          50: { value: "#e8f1fe" },
          100: { value: "#1f75f5" },
          200: { value: "#125dcc" },
          300: { value: "#6397f6" },
          400: { value: "#3f7cf4" },
          500: { value: "#1f75f5" },
          600: { value: "#125dcc" },
          700: { value: "#0e4fb0" },
          800: { value: "#0a3e8c" },
          900: { value: "#072d68" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brandBlue: {
          solid: { value: "{colors.brandBlue.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.brandBlue.700}" },
          muted: { value: "{colors.brandBlue.100}" },
          subtle: { value: "{colors.brandBlue.50}" },
          emphasized: { value: "{colors.brandBlue.300}" },
          focusRing: { value: "{colors.brandBlue.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
