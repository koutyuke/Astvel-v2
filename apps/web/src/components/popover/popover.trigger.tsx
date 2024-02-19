import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ReactNode, forwardRef } from "react";

type Props = {
	children: ReactNode;
};

const PopoverTrigger = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
	return (
		<PopoverPrimitive.Trigger asChild {...props} ref={ref}>
			{children}
		</PopoverPrimitive.Trigger>
	);
});

export { PopoverTrigger };
