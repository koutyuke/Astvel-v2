type Fonts = Record<
  "lato" | "zen-maru-gothic",
  {
    weight: `${number}`[];
    display: "auto" | "block" | "swap" | "fallback" | "optional";
    subsets?: Array<"latin" | "latin-ext">;
    variable: `--${string}`;
    preload?: boolean;
  }
>;

const fonts: Fonts = {
  lato: {
    weight: ["400", "700"],
    display: "swap",
    subsets: ["latin"],
    variable: "--font-lato",
  },
  "zen-maru-gothic": {
    weight: ["400"],
    display: "swap",
    variable: "--font-zen-maru-gothic",
    preload: false,
  },
};

export { fonts };
