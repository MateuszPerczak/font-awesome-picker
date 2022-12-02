import styled from "@emotion/styled";
import { motion } from "framer-motion";

import type { Styles } from "../../assets/icons/icons.types";

const StyledGridIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
  aspect-ratio: 1;
  border-radius: 8px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { nav } }): string => nav};
  }
`;

export const StyledGridIconPoint = styled.span<{ font: Styles }>`
  font-size: 3rem;
  font-family: ${({ font }): Styles => font};
`;

export const StyledGridIconName = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
`;

export default StyledGridIcon;
