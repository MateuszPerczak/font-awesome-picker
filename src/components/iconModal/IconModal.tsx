import Button from "@components/button/Button";
import PointModal from "@components/pointModal/PointModal";
import StylesModal from "@components/stylesModal/StylesModal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "lodash";
import type { FC } from "react";

import type { Styles } from "../../assets/icons/icons.types";
import StyledIconModal, {
  StyledIconModalContent,
  StyledIconModalData,
  StyledIconModalHeader,
  StyledIconModalPoint,
  StyledIconModalWrapper,
} from "./IconModal.styles";
import type { IconModalProps } from "./IconModal.types";

const IconModal: FC<IconModalProps> = ({
  icon,
  onClose,
  style,
  ...rest
}: IconModalProps): JSX.Element => {
  const initialStyle: Styles = icon.styles.includes(style)
    ? style
    : (icon.styles[0] as Styles);

  return (
    <StyledIconModalWrapper>
      <StyledIconModal {...rest} transition={{ duration: 0.2 }}>
        <StyledIconModalHeader>
          <h1>{capitalize(icon.name)}</h1>
          <Button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </StyledIconModalHeader>
        <StyledIconModalContent>
          <StyledIconModalPoint font={initialStyle} name={icon.name}>
            {icon.unicode}
          </StyledIconModalPoint>
          <StyledIconModalData>
            <StylesModal styles={icon.styles} />
            <PointModal point={icon.unicode} />
          </StyledIconModalData>
        </StyledIconModalContent>
      </StyledIconModal>
    </StyledIconModalWrapper>
  );
};

export default IconModal;
