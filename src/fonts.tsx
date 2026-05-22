import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
      @import url("https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap");
      @font-face {
        font-family: "EliceDigitalBaeum_Bold';
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EliceDigitalBaeum_Bold.woff2") format("woff2");
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: "NanumSquareNeo-Variable";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
      }
      `}
    />
  );
}
