import { capitalize } from "lodash";
import type { FC } from "react";

import StyledIconModal, {
  StyledIconModalPoint,
  StyledIconModalWrapper,
} from "./IconModal.styles";
import type { IconModalProps } from "./IconModal.types";

const IconModal: FC<IconModalProps> = ({
  icon,
  ...rest
}: IconModalProps): JSX.Element => {
  return (
    <StyledIconModalWrapper>
      <StyledIconModal {...rest} transition={{ duration: 0.2 }}>
        <StyledIconModalPoint>{icon.unicode}</StyledIconModalPoint>
        <h1>{capitalize(icon.name)}</h1>
      </StyledIconModal>
    </StyledIconModalWrapper>
  );
};

export default IconModal;
