import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, KeyboardEvent, useRef } from "react";

import StyledSearch, { StyledSearchButton, StyledSearchInput } from "./Search.styles";
import type { SearchProps } from "./Search.types";

const Search: FC<SearchProps> = ({ setSearch }: SearchProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if ("Enter" === event.key) {
      updateSearchValue();
    }
  };

  const updateSearchValue = (): void => {
    if (inputRef !== null && inputRef.current !== null) {
      setSearch(inputRef.current.value);
    }
  };

  return (
    <StyledSearch layout="preserve-aspect">
      <StyledSearchInput onKeyDown={handleKeyDown} ref={inputRef} />
      <StyledSearchButton onClick={updateSearchValue}>
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchButton>
    </StyledSearch>
  );
};

export default Search;
