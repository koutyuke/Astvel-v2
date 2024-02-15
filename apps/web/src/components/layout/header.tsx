import NextLink from "next/link";
import { FC } from "react";
import Icon from "#core/assets/brand/icon.svg";
import Logo from "#core/assets/brand/logo.svg";
import { Link } from "#core/src/components/link";
import { css } from "#styles/css";
import { Button } from "../button/button";
import { ThemeToggle } from "../theme/theme-toggle";
import { Hamburger } from "./hamburger";

const Header: FC = () => {
	return (
		<header
			className={css({
				position: "fixed",
				zIndex: 999,
				h: 16,
				w: "full",
				display: "flex",
				alignItems: "center",
				borderBottomWidth: "1px",
				borderColor: "gray.7",
				boxSizing: "border-box",
				backdropFilter: "blur(16px)",
				backdropBlur: "tablet",
				px: 8,
				gap: 8,
			})}
		>
			<NextLink href="/">
				<figure
					className={css({
						display: "flex",
						alignItems: "center",
						gap: 1,
					})}
				>
					<Icon height={48} />
					<span
						className={css({
							display: "none",
							tablet: {
								display: "block",
							},
						})}
					>
						<Logo
							height={32}
							className={css({
								color: {
									base: "gray.10",
									_dark: "gray.12",
								},
							})}
						/>
					</span>
				</figure>
			</NextLink>
			<nav
				className={css({
					display: "none",
					alignContent: "center",
					gap: 4,
					tablet: {
						display: "flex",
					},
				})}
			>
				<Link href="/">Home</Link>
				<Link href="/guilds">Guilds</Link>
				<Link href="/usage">Usage</Link>
				<Link href="/info">Info</Link>
			</nav>
			<div
				className={css({
					marginLeft: "auto",
					display: "flex",
					alignItems: "center",
					gap: 2,
				})}
			>
				<span
					className={css({
						display: "none",
						tablet: {
							display: "flex",
						},
					})}
				>
					<ThemeToggle />
				</span>
				<Button color="green" variant="outline">
					Sign in
				</Button>

				<span
					className={css({
						tablet: {
							display: "none",
						},
					})}
				>
					<Hamburger />
				</span>
			</div>
		</header>
	);
};

export { Header };
