import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: grid;
  place-items: center;
  z-index: 1;
  background-color: ${({ theme: { nav } }): string => nav};
  color: ${({ theme: { accent } }): string => accent};
  min-height: 50px;
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  font-weight: bold;
  max-width: 1000px;
  @media (max-width: 400px) {
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }
`;

export const StyledNavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledNavChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    justify-content: center;
  }
  gap: 8px;
`;

export default StyledNav;
