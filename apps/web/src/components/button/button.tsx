import { ComponentPropsWithoutRef, FC } from "react";
import { cva } from "#styles/css";
import { center } from "#styles/patterns";

type Props = {
	color: "gray" | "blue" | "red" | "green" | "yellow";
	variant: "outline" | "ghost" | "filled";
	loading?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Style = cva({
	base: {
		borderRadius: "lg",
		padding: "0.5rem 1rem",
		minHeight: 10,
		minWidth: 20,
		transition: "all 0.15s",
		boxSizing: "border-box",
		borderWidth: 1,
		borderStyle: "solid",
		color: "colorPalette.11",
	},
	variants: {
		color: {
			green: {
				colorPalette: "green",
			},
			red: {
				colorPalette: "red",
			},
			yellow: {
				colorPalette: "yellow",
			},
			blue: {
				colorPalette: "blue",
			},
			gray: {
				colorPalette: "gray",
			},
		},
		variant: {
			filled: {
				bg: "colorPalette.9",
				color: "colorPalette.2",
				border: "none",
				_hover: {
					bg: "colorPalette.10",
				},
			},
			outline: {
				bg: "colorPalette.3",
				borderColor: "colorPalette.7",
				_hover: {
					bg: "colorPalette.4",
					borderColor: "colorPalette.8",
				},
			},
			ghost: {
				bg: "transparent",
				border: "none",
				_hover: {
					bg: "colorPalette.3",
				},
			},
		},
		loading: {
			true: {
				cursor: "not-allowed",
				opacity: 0.4,
				"&>span": {
					display: "inline-block",
					h: 5,
					w: 5,
					aspectRatio: "1/1",
					borderWidth: 2,
					borderStyle: "solid",
					borderTopColor: "transparent",
					borderRadius: "full",
					animation: "spin 1s linear infinite",
				},
			},
		},
		disabled: {
			true: {
				cursor: "not-allowed",
				opacity: 0.4,
			},
		},
	},
});

const Button: FC<Props> = ({
	type = "button",
	children,
	disabled,
	loading = false,
	variant,
	color,
	className,
	...other
}) => {
	return (
		<button
			type={type}
			disabled={disabled || loading}
			className={`${center()} ${Style({ variant, color, loading, disabled })} ${className}`}
			{...other}
		>
			{loading ? <span /> : children}
		</button>
	);
};

export { Button };
