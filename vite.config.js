import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		watch: {
			usePolling: true,
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				404: resolve(__dirname, "404.html"),
			},
			output: {
				manualChunks(id) {
					if (
						id.includes("@chakra-ui") ||
						id.includes("framer-motion") ||
						id.includes("@emotion")
					) {
						return "vendor-ui";
					}
					if (
						id.includes("react") ||
						id.includes("react-dom") ||
						id.includes("react-router-dom") ||
						id.includes("@tanstack")
					) {
						return "vendor-core";
					}
				},
			},
		},
	},
});
