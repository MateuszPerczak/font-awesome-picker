// import Icon from "@components/icon/Icon";
import GridIcon from "@components/gridIcon/GridIcon";
import Loader from "@components/loader/Loader";
import useIcons from "@hooks/useIcons";
import { useLoader } from "@hooks/useLoader";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";

import StyledIconsGrid, {
  StyledIconsGridHeader,
  StyledIconsGridView,
} from "./IconsGrid.styles";
import type { IconsGridProps } from "./IconsGrid.types";

const IconsGrid: FC<IconsGridProps> = ({
  search,
  style,
}: IconsGridProps): JSX.Element => {
  const { useFilter } = useIcons();
  const filteredIcons = useFilter({ search, style });
  const { lastElementRef, loadedElements } = useLoader(filteredIcons);

  return (
    <StyledIconsGrid>
      <StyledIconsGridHeader>
        {search === ""
          ? `Showing ${loadedElements.length} icons`
          : `Showing ${loadedElements.length} ${
              loadedElements.length === 1 ? "icon" : "icons"
            } for "${search}"`}
      </StyledIconsGridHeader>
      <StyledIconsGridView>
        <AnimatePresence mode="wait">
          {loadedElements.map((icon, index) => (
            <GridIcon key={`${icon.name}-${index}`} style={style} {...icon} />
          ))}
          <Loader ref={lastElementRef}>LOADING</Loader>
        </AnimatePresence>
      </StyledIconsGridView>
    </StyledIconsGrid>
  );
};

export default IconsGrid;
