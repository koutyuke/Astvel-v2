import Icon from "#core/assets/brand/icon.svg";
import Logo from "#core/assets/brand/logo.svg";
import { DiscordIcon, GithubIcon } from "#core/src/components/icon";
import { Link } from "#core/src/components/link";
import { css } from "#styles/css";
import { hstack, vstack } from "#styles/patterns";
import { ThemeToggle } from "../theme/theme-toggle";

const Footer = () => {
	return (
		<footer
			className={vstack({
				borderTopWidth: 1,
				borderTopColor: "gray.7",
				padding: "64px 32px",
				gap: 8,
				bg: "gray.1",
			})}
		>
			<div
				className={css({
					display: "grid",
					w: "100%",
					maxWidth: "1280px",
					gap: 4,
					pb: 8,
					borderBottomWidth: 1,
					borderBottomColor: "gray.7",
					gridTemplateColumns: "repeat(12, 1fr)",
					gridTemplateRows: "repeat(3, 1fr)",
					tablet: {
						gridTemplateRows: "repeat(2, 1fr)",
					},
					laptop: {
						gridTemplateRows: "repeat(1, 1fr)",
					},
				})}
			>
				<div
					className={vstack({
						gridColumn: "2 / 12",
						gridRow: "1 / 2",
						gap: 1,
						laptop: {
							gridColumn: "1 / 7",
						},
					})}
				>
					<div className={hstack()}>
						<Icon height={48} />
						<Logo
							height={32}
							className={css({
								color: {
									base: "gray.10",
									_dark: "gray.12",
								},
							})}
						/>
					</div>
					<div className={hstack()}>
						<Link external href="" className={`group ${css({})}`}>
							<GithubIcon />
						</Link>
						<Link external href="">
							<DiscordIcon />
						</Link>
					</div>
					<div
						className={css({
							pt: 4,
						})}
					>
						<ThemeToggle />
					</div>
				</div>
				<nav
					className={vstack({
						gridColumn: "2 / 7",
						gridRow: "2 / 3",
						gap: 1,
						fontSize: "sm",
						laptop: {
							gridColumn: "7 / 9",
							gridRow: "1 / 2",
						},
						tablet: {
							gridColumn: "2 / 5",
						},
					})}
				>
					<p
						className={css({
							fontSize: "xl",
							fontWeight: "bold",
						})}
					>
						Contents
					</p>
					<Link href="/">Home</Link>
					<Link href="/guilds">Guilds</Link>
					<Link href="/usage">Usage</Link>
					<Link href="/info">Info</Link>
				</nav>
				<div
					className={vstack({
						gridColumn: "7 / 12",
						gridRow: "2 / 3",
						gap: 1,
						fontSize: "sm",
						laptop: {
							gridColumn: "9 / 11",
							gridRow: "1 / 2",
						},
						tablet: {
							gridColumn: "5 / 9",
						},
					})}
				>
					<p
						className={css({
							fontSize: "xl",
							fontWeight: "bold",
						})}
					>
						About
					</p>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/"
					>
						Code
					</Link>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/guilds"
					>
						License
					</Link>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/usage"
					>
						Design
					</Link>
				</div>
				<div
					className={vstack({
						gridColumn: "2 / 7",
						gridRow: "3 / 4",
						gap: 1,
						fontSize: "sm",
						laptop: {
							gridColumn: "11 / 13",
							gridRow: "1 / 2",
						},
						tablet: {
							gridColumn: "9 / 12",
							gridRow: "2 / 3",
						},
					})}
				>
					<p
						className={css({
							fontSize: "xl",
							fontWeight: "bold",
						})}
					>
						Creator
					</p>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/"
					>
						X(Twitter)
					</Link>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/"
					>
						Github
					</Link>
					<Link
						external
						withExternalIcon
						iconClassName={css({
							h: 3,
						})}
						href="/"
					>
						Discord
					</Link>
				</div>
			</div>
			<p
				className={css({
					textAlign: "center",
				})}
			>
				&copy; Astvel
			</p>
		</footer>
	);
};

export { Footer };
