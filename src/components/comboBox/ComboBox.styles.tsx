import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledComboBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-width: 120px;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: normal;
  position: relative;
  cursor: pointer;
  background-color: ${({ theme: { combo } }): string => combo};
  &:active {
    background-color: ${({ theme: { active } }): string => active};
  }
`;

export const StyledComboBoxList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  border-radius: 8px;
  width: 100%;
  padding: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;
  background-color: ${({ theme: { combo } }): string => combo};
  border: 1px solid ${({ theme: { border } }): string => border};
  color: ${({ theme: { color } }): string => color};
  box-shadow: 0 0 1rem ${({ theme: { shadow } }): string => shadow};
  ::-webkit-scrollbar {
    width: 4px;
  }
`;

export const StyledComboBoxItem = styled.span`
  display: flex;
  flex: 1 1 auto;
  padding: 8px 16px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme: { hover } }): string => hover};
  }
`;

export default StyledComboBox;
