import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#0f172a",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "#0f172a",
  appContentBg: "#0f172a",
  appBorderColor: "lightgrey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Raleway", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: "white",
  textInverseColor: "rgba(255,255,255,0.9)",
    textMutedColor: "silver",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "white",
  barBg: "#0f172a",

  // Form colors
  inputBg: "#0f172a",
  inputBorder: "silver",
  inputTextColor: "white",
  inputBorderRadius: 4,

  // Brand
  brandTitle: "Josafá",
  brandUrl: "https://josafa.com.br",
  brandTarget: "_blank",
});
