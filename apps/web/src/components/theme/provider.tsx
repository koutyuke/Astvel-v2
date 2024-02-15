"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { FC, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const ThemeProvider: FC<Props> = ({ children }) => (
	<NextThemesProvider attribute="data-theme" defaultTheme="dark">
		{children}
	</NextThemesProvider>
);

export { ThemeProvider };
