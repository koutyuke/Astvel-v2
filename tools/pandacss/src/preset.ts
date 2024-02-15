import { breakpoints, fonts } from "@astvel/design-token";
import { definePreset } from "@pandacss/dev";
import { customRadixColorsPreset } from "./utils/customRadixColorsPreset";
import { essentialPandaPreset } from "./utils/essentialPandaPreset";

export const preset = definePreset({
  theme: {
    extend: {
      breakpoints: breakpoints,
      tokens: {
        fonts: {
          lato: {
            value: `var(${fonts.lato.variable})`,
          },
          "zen-maru": {
            value: `var(${fonts["zen-maru-gothic"].variable})`,
          },
        },
      },
    },
  },
  conditions: {
    light: "[data-theme='light'] &",
    dark: "[data-theme='dark'] &",
  },
  presets: [
    essentialPandaPreset,
    customRadixColorsPreset({
      darkMode: {
        condition: "[data-theme='dark'] &",
      },
      autoP3: true,
      renameScale: {
        black: "shade",
        white: "tint",
        cyan: "blue",
      },
      colorScales: ["gray", "red", "yellow", "green"],
      withoutAlpha: true,
    }),
  ],
});
