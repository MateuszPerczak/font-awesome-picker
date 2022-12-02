import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${({ theme: { nav } }): string => nav};
  box-shadow: 0 0 1rem ${({ theme: { shadow } }): string => shadow};
  border: 1px solid ${({ theme: { border } }): string => border};
  border-radius: 8px;
  padding: 20px 10px;
  pointer-events: auto;
  width: clamp(200px, 80%, 800px);
  aspect-ratio: 3 / 2;
`;

export const StyledIconModalPoint = styled.span`
  font-size: 10rem;
  font-family: "Light";
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
