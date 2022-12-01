import type { Dispatch, SetStateAction } from "react";

import type { Styles } from "../../assets/icons/icons.types";

export type NavProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  style: Styles;
  setStyle: Dispatch<SetStateAction<NavProps["style"]>>;
};
