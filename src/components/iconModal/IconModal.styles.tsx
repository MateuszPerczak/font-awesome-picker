import styled from "@emotion/styled";
import { motion } from "framer-motion";

import type { Styles } from "../../assets/icons/icons.types";

export const StyledIconModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`;

const StyledIconModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme: { nav } }): string => nav};
  box-shadow: 0 0 1rem ${({ theme: { shadow } }): string => shadow};
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 8px;
  padding: 20px;
  pointer-events: auto;
  width: clamp(200px, 80%, 800px);
  aspect-ratio: 3 / 2;
  z-index: 2;
`;

export const StyledIconModalPoint = styled.span<{ font: Styles }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 50%;
  padding: 10px;
  font-size: 8rem;
  font-family: ${({ font }): Styles => font};
`;

export const StyledIconModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const StyledIconModalContent = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledIconModalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%;
  font-size: 1.5rem;
`;

export default StyledIconModal;

// display: flex;
// align-items: center;
// justify-content: center;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// width: 800px;
// aspect-ratio: 2 / 1;
// background-color: ${({ theme: { nav } }): string => nav};
// border: 1px solid ${({ theme: { border } }): string => border};
// color: ${({ theme: { color } }): string => color};
// box-shadow: 0 0 1rem ${({ theme: { shadow } }): string => shadow};
// border-radius: 8px;
