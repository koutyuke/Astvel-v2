import { FC } from "react";
import { css } from "#styles/css";

type Props = {
	className?: string;
};

const Separator: FC<Props> = ({ className }) => {
	return (
		<span
			className={`${css({
				display: "block",
				width: "full",
				height: "2px",
				bg: "gray.6",
				borderRadius: "full",
				marginY: "2",
			})} ${className}`}
		/>
	);
};

export { Separator };
