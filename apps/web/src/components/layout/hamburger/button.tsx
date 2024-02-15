import { FC } from "react";
import { css, cva } from "#styles/css";

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const ButtonLineStyle = cva({
	base: {
		h: 0.5,
		w: 5,
		borderRadius: "full",
		bg: "gray.8",
		transition: "all 0.15s",
	},
	variants: {
		topOpen: {
			true: {
				transform: "rotate(45deg) translate(4.95px,4.95px)",
			},
		},
		middleOpen: {
			true: {
				opacity: 0,
			},
			false: {
				opacity: 1,
			},
		},
		bottomOpen: {
			true: {
				transform: "rotate(-45deg) translate(4.95px,-4.95px)",
			},
		},
	},
});

const BurgerButton: FC<Props> = ({ open, setOpen }) => {
	return (
		<button
			type="button"
			aria-label="Open navigation"
			onClick={() => setOpen(!open)}
			className={css({
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: 10,
				width: 10,
				borderRadius: "lg",
				borderWidth: 1,
				gap: "5px",
				borderColor: "gray.8",
				boxSizing: "border-box",
				bg: "gray.3",
			})}
		>
			<span
				className={ButtonLineStyle({
					topOpen: open,
				})}
			/>
			<span
				className={ButtonLineStyle({
					middleOpen: open,
				})}
			/>
			<span
				className={ButtonLineStyle({
					bottomOpen: open,
				})}
			/>
		</button>
	);
};

export { BurgerButton };
