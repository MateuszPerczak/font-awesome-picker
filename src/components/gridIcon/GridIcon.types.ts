import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

import type { Icon, Styles } from "../../assets/icons/icons.types";

export type GridIconProps = Icon & { style: Styles } & HTMLAttributes<HTMLDivElement> &
  MotionProps;
