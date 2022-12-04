import type { FC } from "react";

import StyledStylesModal, { StyledStylesModalWrapper } from "./StylesModal.styles";
import type { StylesModalProps } from "./StylesModal.types";

const StylesModal: FC<StylesModalProps> = ({ styles }: StylesModalProps): JSX.Element => {
  return (
    <StyledStylesModal>
      <span>Styles:</span>
      <StyledStylesModalWrapper>
        {styles.map((style, index) => (
          <div key={`icon-style-${index}`}>{style}</div>
        ))}
      </StyledStylesModalWrapper>
    </StyledStylesModal>
  );
};

export default StylesModal;
