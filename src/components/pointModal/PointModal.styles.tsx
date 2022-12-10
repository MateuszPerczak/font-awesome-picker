import styled from "@emotion/styled";

const StyledPointModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  font-size: clamp(0.5rem, 2vw, 1rem);
  font-weight: bold;
`;

export const StyledPointModalChar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: ${({ theme: { combo } }): string => combo};
  font-size: clamp(0.5rem, 2vw, 1rem);
`;

export default StyledPointModal;
