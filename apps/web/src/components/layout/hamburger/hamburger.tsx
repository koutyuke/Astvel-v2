"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { FC, useEffect, useState } from "react";
import { CloseIcon } from "#core/src/components/icon/close/close";
import { Link } from "#core/src/components/link";
import { css } from "#styles/css";
import { BurgerButton } from "./button";

const Hamburger: FC = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
	}, [open]);

	return (
		<>
			<BurgerButton open={open} setOpen={setOpen} />
			<span
				onClick={() => setOpen(false)}
				onKeyDown={() => setOpen(false)}
				className={`${css({
					position: "fixed",
					top: 0,
					left: 0,
					h: "100svh",
					w: "100svw",
					bg: "shade.a.10",
					transition: "all 0.4s",
					opacity: open ? 1 : 0,
					pointerEvents: open ? "auto" : "none",
				})} `}
			/>
			<nav
				className={css({
					position: "fixed",
					top: 0,
					right: 0,
					h: "100svh",
					w: "80svw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					bg: "gray.2",
					transition: "all 0.4s",
					transform: open ? "translateX(0)" : "translateX(100%)",
					fontSize: "4xl",
					fontWeight: "bold",
					gap: 4,
				})}
			>
				<button
					type="button"
					className={css({
						position: "absolute",
						top: 8,
						left: 8,
						borderRadius: "full",
						borderWidth: 2,
						borderColor: "gray.8",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						h: 8,
						w: 8,
					})}
					onClick={() => setOpen(false)}
				>
					<CloseIcon
						size={24}
						className={css({
							stroke: "gray.8",
						})}
					/>
				</button>
				<Link href="/">Home</Link>
				<Link href="/guilds">Guilds</Link>
				<Link href="/usage">Usage</Link>
				<Link href="/info">Info</Link>
				<span
					className={css({
						position: "absolute",
						bottom: "10%",
						left: "50%",
						transform: "translateX(-50%)",
					})}
				>
					<ThemeToggle />
				</span>
			</nav>
		</>
	);
};

export { Hamburger };
