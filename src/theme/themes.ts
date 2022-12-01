export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#f1f1f1",
    color: "#000",
    category: "#ccc",
    nav: "#fff",
    combo: "#f1f1f1",
    shadow: "#aaaaaaff",
    hover: "#eaeaea",
    border: "#aaa",
    accent: "#0066aa",
    active: "#eaeaea",
  },
  dark: {
    background: "#252525",
    color: "#fff",
    category: "#777",
    nav: "#1e1e1e",
    accent: "#00ccff",
    border: "#212121",
    active: "#212121",
    combo: "#252525",
    shadow: "#00000055",
    hover: "#212121",
  },
};

export default themes;

// background: "#252525",
// color: "#fff",
// nav: "#1e1e1e",
// accent: "#00ccff",
// border: "#212121",
// combo: "#252525",
// shadow: "#00000055",
// hover: "#212121",
// active: "#212121",
