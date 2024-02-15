import { css } from "#styles/css";

const Page = () => {
	return (
		<main
			className={css({
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				width: "100%",
				gap: "2",
				paddingTop: "10rem",
			})}
		>
			Hello World
		</main>
	);
};

export default Page;
