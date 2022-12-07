import type { FC } from "react";

import StyledStylesModal, {
  StyledStyle,
  StyledStylesModalWrapper,
} from "./StylesModal.styles";
import type { StylesModalProps } from "./StylesModal.types";

const StylesModal: FC<StylesModalProps> = ({ styles }: StylesModalProps): JSX.Element => {
  return (
    <StyledStylesModal>
      <span>Styles</span>
      <StyledStylesModalWrapper>
        {styles.map((style, index) => (
          <StyledStyle key={`icon-style-${index}`}>{style}</StyledStyle>
        ))}
      </StyledStylesModalWrapper>
    </StyledStylesModal>
  );
};

export default StylesModal;
