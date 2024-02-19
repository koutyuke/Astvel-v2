import * as PopoverPrimitive from "@radix-ui/react-popover";
import { FC, ReactNode } from "react";
import { PopoverContent } from "./popover.content";
import { PopoverTrigger } from "./popover.trigger";

type Props = {
	children: ReactNode;
};

type PopoverType = FC<Props> & {
	Trigger: typeof PopoverTrigger;
	Content: typeof PopoverContent;
};

const Popover: PopoverType = ({ children, ...props }) => (
	<PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export { Popover };
