import styled from "@emotion/styled";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 40px;
  font-size: 0.8rem;
  aspect-ratio: 1;
  border-radius: 8px;
  font-weight: normal;
  cursor: pointer;
  background-color: ${({ theme: { background } }): string => background};
  &:active {
    background-color: ${({ theme: { active } }): string => active};
  }
`;

export default Button;
