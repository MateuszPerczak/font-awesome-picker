import { useMemo } from "react";

import { icons } from "../assets/icons/icons";
import type { Icons, Styles } from "../assets/icons/icons.types";

type FilterProps = {
  search: string;
  style: Styles;
};

type UseIcons = {
  useFilter: ({ search, style }: FilterProps) => Icons;
};

const useIcons = (): UseIcons => {
  const _filter = ({ search, style }: FilterProps): Icons => {
    return icons.filter(({ name, styles, terms }) => {
      return (
        [name, ...terms].some((term) =>
          term.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        ) && styles.includes(style)
      );
    });
  };

  const useFilter = ({ search, style }: FilterProps): Icons => {
    return useMemo(() => _filter({ search, style }), [search, style]);
  };

  return { useFilter };
};

export default useIcons;
