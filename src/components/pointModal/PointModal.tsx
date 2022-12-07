import type { FC } from "react";

import StyledPointModal from "./PointModal.styles";
import type { PointModalProps } from "./PointModal.types";

const PointModal: FC<PointModalProps> = ({ point }: PointModalProps): JSX.Element => {
  return <StyledPointModal>{`${point}`}</StyledPointModal>;
};

export default PointModal;
