import { Moon as Icon } from "lucide-react";
import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<typeof Icon>, "absoluteStrokeWidth">;

export const MoonIcon: FC<Props> = props => <Icon {...props} />;
