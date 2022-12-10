import type { FC } from "react";

import StyledPointModal, { StyledPointModalChar } from "./PointModal.styles";
import type { PointModalProps } from "./PointModal.types";

const PointModal: FC<PointModalProps> = ({ point }: PointModalProps): JSX.Element => {
  return (
    <StyledPointModal>
      <span>Unicode</span>
      <StyledPointModalChar>{`\\u${point
        .charCodeAt(0)
        .toString(16)}`}</StyledPointModalChar>
    </StyledPointModal>
  );
};

export default PointModal;
