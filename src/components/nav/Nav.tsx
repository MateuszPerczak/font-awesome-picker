import ComboBox from "@components/comboBox/ComboBox";
import Search from "@components/search/Search";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { Styles } from "../../assets/icons/icons.types";
import StyledNav, {
  StyledNavChildren,
  StyledNavLogo,
  StyledNavWrapper,
} from "./Nav.styles";
import type { NavProps } from "./Nav.types";

const Nav: FC<NavProps> = ({ setSearch, setStyle, style }: NavProps): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledNavLogo>
          <FontAwesomeIcon icon={faFontAwesome} />
          <span>Font Awesome Picker</span>
        </StyledNavLogo>
        <StyledNavChildren>
          <Search setSearch={setSearch} />
          <ComboBox
            value={style}
            setValue={setStyle}
            options={["Regular", "Thin", "Light", "Solid", "Brands"] as Styles[]}
          />
        </StyledNavChildren>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Nav;
