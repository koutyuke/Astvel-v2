import { Laptop as Icon } from "lucide-react";
import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<typeof Icon>, "absoluteStrokeWidth">;

export const PCIcon: FC<Props> = props => <Icon {...props} />;
