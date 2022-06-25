import { extendTheme } from "@chakra-ui/react"

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false
}

const styles = {
	global: ({
		body: {
			bg: "#191919"
		}
	})
}

const colors = {
	blue: "#036ffc"
}

const fonts = {
	body: `"Oxygen", sans-serif`,
	heading: `"Oxygen", sans-serif`
}

const theme = extendTheme({ config, styles, colors, fonts })
export default theme
