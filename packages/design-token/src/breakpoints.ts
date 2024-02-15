export const breakpoints = {
  tablet: "640px",
  laptop: "1024px",
  desktop: "1280px",
} as const satisfies Record<string, `${number}px`>;
