import {
	extendTheme,
	type StyleFunctionProps,
	type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: `"Sora", "SebangGothic"`,
		body: `"Sora", "SebangGothic"`,
	},
	colors: {
		brandBlue: {
			100: "#1f75f5",
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
