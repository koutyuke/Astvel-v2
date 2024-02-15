import { Sun as Icon } from "lucide-react";
import { ComponentProps, FC } from "react";

type Props = Omit<ComponentProps<typeof Icon>, "absoluteStrokeWidth">;

export const SunIcon: FC<Props> = props => <Icon {...props} />;
