import { Lato, Zen_Maru_Gothic } from "next/font/google";

const lato = Lato({
	weight: ["400", "700"],
	display: "swap",
	subsets: ["latin"],
	variable: "--font-lato",
});

const zenMaruGothic = Zen_Maru_Gothic({
	weight: ["400"],
	display: "swap",
	variable: "--font-zen-maru-gothic",
	preload: false,
});

const fontVariables = `${lato.variable} ${zenMaruGothic.variable}`;

export { fontVariables };
