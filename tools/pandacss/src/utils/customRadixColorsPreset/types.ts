/**
 * Array of radix scale names.
 * @see https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette
 */
declare const radixColorScales: readonly [
  "amber",
  "black",
  "blue",
  "bronze",
  "brown",
  "crimson",
  "cyan",
  "gold",
  "grass",
  "gray",
  "green",
  "indigo",
  "iris",
  "jade",
  "lime",
  "mauve",
  "mint",
  "olive",
  "orange",
  "pink",
  "plum",
  "purple",
  "red",
  "ruby",
  "sage",
  "sand",
  "sky",
  "slate",
  "teal",
  "tomato",
  "violet",
  "white",
  "yellow"
];
type RadixColorScale = (typeof radixColorScales)[number];
type RadixColorScales = RadixColorScale[];

export type { RadixColorScales, RadixColorScale };
