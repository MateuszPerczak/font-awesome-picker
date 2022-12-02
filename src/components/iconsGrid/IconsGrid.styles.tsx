import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledIconsGrid = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  padding: 10px;
  overflow: hidden;
`;

export const StyledIconsGridHeader = styled.header`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 10px;
`;

export const StyledIconsGridView = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  font-size: 0.7rem;
  padding: 0 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default StyledIconsGrid;
