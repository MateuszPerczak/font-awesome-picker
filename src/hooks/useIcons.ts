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

  // const maxPages = Math.floor(filteredIcons.length / 150);
  // const safePage = Math.min(maxPages, 1);
  // return filteredIcons.length > 0
  //   ? filteredIcons.slice(safePage * 150, safePage * 150 + 150)
  //   : filteredIcons;

  // const handleObserver = useCallback((entries: any) => {
  //   console.log(entries);
  //   const target = entries[0];
  //   if (target && target.isIntersecting) {
  //     console.log("Loading more...");
  //   }
  // }, []);

  // useEffect(() => {
  //   const option = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 0
  //   };
  //   const observer = new IntersectionObserver(handleObserver, option);
  //   if (loader.current) observer.observe(loader.current);
  // }, [handleObserver]);

  return { useFilter };
};

export default useIcons;
