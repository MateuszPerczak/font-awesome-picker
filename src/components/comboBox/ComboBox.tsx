import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";

import StyledComboBox, {
  StyledComboBoxItem,
  StyledComboBoxList,
} from "./ComboBox.styles";
import type { ComboBoxProps } from "./ComboBox.types";

const ComboBox: FC<ComboBoxProps> = ({ value, setValue, options }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (): void => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <StyledComboBox onClick={toggleIsOpen} layout="preserve-aspect">
      <span>{value ?? "Select style"}</span>
      <FontAwesomeIcon icon={faAngleDown} />
      <AnimatePresence mode="wait">
        {isOpen && (
          <StyledComboBoxList
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 230 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", mass: 0.2, stiffness: 150, damping: 12 }}
          >
            {options.map((option, index) => (
              <StyledComboBoxItem
                key={`option-${index}`}
                onClick={(): void => setValue(option)}
              >
                {option}
              </StyledComboBoxItem>
            ))}
          </StyledComboBoxList>
        )}
      </AnimatePresence>
    </StyledComboBox>
  );
};

export default ComboBox;
