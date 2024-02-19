import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ComponentPropsWithoutRef, FC, ReactNode, forwardRef } from "react";
import { css } from "#styles/css";

type Props = {
	children: ReactNode;
} & ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>;

const PopoverContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
	({ children, className, sideOffset, collisionPadding, ...other }, ref) => {
		return (
			<PopoverPrimitive.Content
				ref={ref}
				className={`${css({
					borderRadius: "lg",
					p: "8px 12px",
					borderWidth: 1,
					borderStyle: "solid",
					borderColor: "gray.6",
					bg: "gray.3",
				})} ${className}`}
				sideOffset={sideOffset ?? 4}
				collisionPadding={collisionPadding ?? 16}
				{...other}
			>
				{children}
				<PopoverPrimitive.Arrow
					className={css({
						fill: "gray.6",
					})}
				/>
			</PopoverPrimitive.Content>
		);
	},
);

export { PopoverContent };
