import { icons } from "../assets/icons/icons";
import type { Icons, Styles } from "../assets/icons/icons.types";

type FilterProps = {
  search: string;
  style: Styles;
};

type UseIcons = {
  filter: ({ search, style }: FilterProps) => Icons;
};

const useIcons = (): UseIcons => {
  const filter = ({ search, style }: FilterProps): Icons => {
    return icons.filter(({ name, styles, terms }) => {
      return (
        [name, ...terms].some((term) =>
          term.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        ) && styles.includes(style)
      );
    });
  };

  return { filter };
};

export default useIcons;
