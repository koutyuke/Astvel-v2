"use client";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { css } from "#styles/css";
import { ExternalLinkIcon } from "../icon/external-link";

type LinkProps = NextLinkProps & {
	children: ReactNode;
	external?: false;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
	children: ReactNode;
	external: true;
	withExternalIcon?: boolean;
	iconClassName?: string;
};

const ExternalLink = ({
	children,
	withExternalIcon = false,
	iconClassName,
	...props
}: Omit<AnchorProps, "external">) => (
	<a
		{...props}
		target="_blank"
		rel="noopener noreferrer"
		className={`${css({
			display: "flex",
			alignItems: "center",
			gap: 1,
			transition: "all 0.2s",
			_hover: {
				color: "green.10",
			},
		})} ${props.className}
    `}
	>
		{withExternalIcon && (
			<ExternalLinkIcon
				className={`${css({
					aspectRatio: "1 / 1",
				})} ${iconClassName}`}
				size="80%"
			/>
		)}
		<span>{children}</span>
	</a>
);

const InternalLink = ({ children, ...props }: Omit<LinkProps, "external">) => {
	const pathName = usePathname();
	const isActive = pathName === props.href;
	return (
		<NextLink
			{...props}
			className={css({
				color: isActive ? "green.10" : "current",
				transition: "color 0.2s",
				_hover: {
					color: "green.10",
				},
			})}
		>
			{children}
		</NextLink>
	);
};

const Link = ({ children, ...props }: LinkProps | AnchorProps) => {
	const { external, ...other } = props;
	return external ? (
		<ExternalLink {...(other as Parameters<typeof ExternalLink>[0])}>{children}</ExternalLink>
	) : (
		<InternalLink {...(props as Parameters<typeof InternalLink>[0])}>{children}</InternalLink>
	);
};

export { Link };
