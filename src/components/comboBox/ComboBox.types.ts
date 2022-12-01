import type { Dispatch, SetStateAction } from "react";

import type { Styles } from "../../assets/icons/icons.types";

export type ComboBoxProps = {
  value: Styles;
  setValue: Dispatch<SetStateAction<ComboBoxProps["value"]>>;
  options: Styles[];
};
