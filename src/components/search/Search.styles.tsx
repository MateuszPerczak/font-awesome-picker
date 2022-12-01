import styled from "@emotion/styled";

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.8rem;
  background-color: ${({ theme: { background } }): string => background};
`;

export const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  height: calc(100% - 10px);
  background-color: ${({ theme: { background } }): string => background};
  color: ${({ theme: { color } }): string => color};
`;

export const StyledSearchButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 0.8rem;
  aspect-ratio: 1;
  cursor: pointer;
  background-color: ${({ theme: { background } }): string => background};
  &:active {
    background-color: ${({ theme: { active } }): string => active};
  }
`;

export default StyledSearch;
