import { css, Global, Theme, useTheme } from "@emotion/react";
import useWindowDimensions from "@hooks/useWindowDimensions";
import type { FC } from "react";
import { memo } from "react";

import faBrands from "../../assets/fonts/faBrands.ttf";
import faLight from "../../assets/fonts/faLight.ttf";
import faRegular from "../../assets/fonts/faRegular.ttf";
import faSolid from "../../assets/fonts/faSolid.ttf";
import faThin from "../../assets/fonts/faThin.ttf";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color, accent }: Theme = useTheme();
  const { height } = useWindowDimensions();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Nunito", sans-serif;
          display: flex;
          flex-direction: column;
          background: ${background};
          color: ${color};
          user-select: none;
          height: ${`${height}px`};
          overflow: hidden;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: ${background};
        }
        ::-webkit-scrollbar-thumb {
          background: ${accent};
          border-radius: 8px;
        }
        ::selection {
          color: ${background};
          background: ${accent};
        }
        @font-face {
          font-family: "Brands";
          src: url(${faBrands}) format("truetype");
        }
        @font-face {
          font-family: "Regular";
          src: url(${faRegular}) format("truetype");
        }
        @font-face {
          font-family: "Solid";
          src: url(${faSolid}) format("truetype");
        }
        @font-face {
          font-family: "Thin";
          src: url(${faThin}) format("truetype");
        }
        @font-face {
          font-family: "Light";
          src: url(${faLight}) format("truetype");
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
