// import Icon from "@components/icon/Icon";
import GridIcon from "@components/gridIcon/GridIcon";
import IconModal from "@components/iconModal/IconModal";
import Loader from "@components/loader/Loader";
import useIcons from "@hooks/useIcons";
import { useLoader } from "@hooks/useLoader";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { FC, useState } from "react";

import type { Icon } from "../../assets/icons/icons.types";
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
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);

  return (
    <>
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
              <GridIcon
                key={`${icon.name}-${index}`}
                style={style}
                {...icon}
                layoutId={icon.name}
                onClick={(): void => setSelectedIcon(icon)}
              />
            ))}
          </AnimatePresence>
          <Loader ref={lastElementRef}>🐢</Loader>
        </StyledIconsGridView>
      </StyledIconsGrid>
      <AnimatePresence>
        {selectedIcon && (
          <IconModal
            layoutId={selectedIcon.name}
            icon={selectedIcon}
            style={style}
            onClose={(): void => setSelectedIcon(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default IconsGrid;

// (
//   <motion.div
//     layoutId={selectedIcon.name}
//     style={{
//       position: "absolute",
//       top: 50,
//       left: 50,
//       transform: "translate(-50%, -50%)",
//       width: "300px",
//       height: "200px",
//     }}
//   >
//     <motion.h5>{selectedIcon.name}</motion.h5>
//     <motion.h2>{selectedIcon.unicode}</motion.h2>
//     <motion.button onClick={(): void => setSelectedIcon(null)} />
//   </motion.div>
// )
