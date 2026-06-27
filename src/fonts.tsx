import { Global } from "@emotion/react";

export default function Fonts() {
	return (
		<Global
			styles={`
        @import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap");

        @font-face {
            font-family: "SebangGothic";
            src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Regular.woff") format("woff");
            font-weight: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "SebangGothic";
            src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff") format("woff");
            font-weight: 700;
            font-display: swap;
        }
      `}
		/>
	);
}
