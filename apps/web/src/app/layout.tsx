import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/components/theme/provider";
import { AuthProvider } from "@/features/auth/components";
import { fontVariables } from "@/styles/fonts";
import { Provider as JotaiProvider } from "jotai";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { CoreStyleProvider } from "#core/src/context/styleProvider";
import { css } from "#styles/css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Astvel - ",
	description: "Generated by create turbo",
	metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
};

const RootLayout = ({
	children,
}: {
	children: ReactNode;
}) => (
	<html lang="en" suppressHydrationWarning className={`${fontVariables}`}>
		<body
			className={`${css({
				height: 1,
				width: 1,
				minHeight: "100svh",
				minWidth: "100svw",
				bg: "gray.1",
				fontFamily: "base",
				backgroundImage: "radial-gradient(var(--colors-gray-6) 1px, transparent 1px)",
				backgroundSize: "24px 24px",
				color: "gray.11",
			})}`}
		>
			<ThemeProvider>
				<CoreStyleProvider>
					<JotaiProvider>
						<AuthProvider>
							<Header />
							<main
								className={css({
									minHeight: "100svh",
									width: "100svw",
								})}
							>
								{children}
							</main>
							<Footer />
						</AuthProvider>
					</JotaiProvider>
				</CoreStyleProvider>
			</ThemeProvider>
		</body>
	</html>
);

export default RootLayout;
