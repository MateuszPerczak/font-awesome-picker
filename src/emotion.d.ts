import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    backgroundBlur: string;
    color: string;
    category: string;
    nav: string;
    accent: string;
    border: string;
    active: string;
    combo: string;
    shadow: string;
    hover: string;
  }
}
