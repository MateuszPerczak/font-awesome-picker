import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import IconsGrid from "@components/iconsGrid/IconsGrid";
import Nav from "@components/nav/Nav";
import type { FC } from "react";
import { useState } from "react";

import type { Styles } from "../../assets/icons/icons.types";

const AppContent: FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [style, setStyle] = useState<Styles>("Light");

  return (
    <>
      <Nav setSearch={setSearch} style={style} setStyle={setStyle} />
      <IconsGrid search={search} style={style} />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default AppContent;
