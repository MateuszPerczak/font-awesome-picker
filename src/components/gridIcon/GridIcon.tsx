import { capitalize } from "lodash";
import type { FC } from "react";

import StyledGridIcon, {
  StyledGridIconName,
  StyledGridIconPoint,
} from "./GridIcon.styles";
import type { GridIconProps } from "./GridIcon.types";

const GridIcon: FC<GridIconProps> = ({
  name,
  style,
  unicode,
}: GridIconProps): JSX.Element => {
  return (
    <StyledGridIcon
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <StyledGridIconPoint font={style}>{unicode}</StyledGridIconPoint>
      <StyledGridIconName>{capitalize(name)}</StyledGridIconName>
    </StyledGridIcon>
  );
};

export default GridIcon;
