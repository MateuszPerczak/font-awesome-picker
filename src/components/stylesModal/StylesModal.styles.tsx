import styled from "@emotion/styled";

const StyledStylesModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  font-size: clamp(0.5rem, 2vw, 1rem);
  font-weight: bold;
`;

export const StyledStylesModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const StyledStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: ${({ theme: { combo } }): string => combo};
  font-size: clamp(0.5rem, 2vw, 1rem);
`;

export default StyledStylesModal;
