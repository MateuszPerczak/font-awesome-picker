import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

import type { Icon } from "../../assets/icons/icons.types";

export type IconModalProps = {
  icon: Icon;
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;
