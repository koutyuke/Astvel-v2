"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { MoonIcon, PCIcon, SunIcon } from "#core/src/components/icon";
import { css, cva } from "#styles/css";

const ToggleStyle = cva({
	base: {
		padding: 1,
		borderRadius: "full",
		zIndex: 10,
		transition: "all 0.15s",
	},
	variants: {
		isActive: {
			false: {
				"& svg": {
					_hover: {
						stroke: "gray.12",
					},
				},
			},
		},
	},
});

const IndicatorStyle = cva({
	base: {
		position: "absolute",
		top: "50%",
		height: 6,
		width: 6,
		borderRadius: "full",
		bg: "gray.5",
		transition: "all 0.3s",
		transform: "translate(0px, -50%)",
		_dark: {
			shadowColor: "black",
		},
	},
	variants: {
		theme: {
			light: {
				transform: "translate(0px, -50%)",
			},
			dark: {
				transform: "translate(28px, -50%)",
			},
			system: {
				transform: "translate(56px, -50%)",
			},
		},
	},
});

const ThemeToggle: FC = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			className={css({
				height: 8,
				width: "90px",
				bg: "gray.2",
				borderRadius: "full",
				borderWidth: "1px",
				borderColor: "gray.7",
				paddingX: "4px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				position: "relative",
				_dark: {
					shadowColor: "black",
				},
			})}
		>
			<span id="indicator" className={IndicatorStyle({ theme: theme as "light" | "dark" | "system" })} />
			<button
				type="button"
				aria-label="Light theme"
				onClick={() => {
					setTheme("light");
				}}
				className={ToggleStyle({ isActive: theme === "light" })}
			>
				<SunIcon
					size={16}
					className={css({
						stroke: "gray.10",
						transition: "all 0.3s",
					})}
				/>
			</button>
			<button
				type="button"
				aria-label="Dark theme"
				onClick={() => {
					setTheme("dark");
				}}
				className={ToggleStyle({ isActive: theme === "dark" })}
			>
				<MoonIcon
					size={16}
					className={css({
						stroke: "gray.10",
						transition: "all 0.3s",
					})}
				/>
			</button>
			<button
				type="button"
				aria-label="System theme"
				onClick={() => {
					setTheme("system");
				}}
				className={ToggleStyle({ isActive: theme === "system" })}
			>
				<PCIcon
					size={16}
					className={css({
						stroke: "gray.10",
						transition: "all 0.3s",
					})}
				/>
			</button>
		</div>
	);
};

export { ThemeToggle };
