import type { RefAttributes } from "react";

import type { Icon, Styles } from "../../assets/icons/icons.types";

// export type GridIconProps = Icon & { style: Styles };

export type GridIconProps = Icon & { style: Styles; ref?: RefAttributes<HTMLDivElement> };
