import { fonts } from "@astvel/design-token";
import { preset } from "@astvel/pandacss";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        fonts: {
          base: {
            value: `var(${fonts.lato.variable}), var(${fonts["zen-maru-gothic"].variable}) `,
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "./styled-system",
  jsxFramework: "react",
});
