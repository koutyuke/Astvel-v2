"use client";

import { Button } from "@/components/button";
import { Popover } from "@/components/popover/popover";
import { Separator } from "@/components/popover/separator";
import { FC, useEffect, useState } from "react";
import { Image } from "#core/src/components/image";
import { css } from "#styles/css";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { signOut } from "../utils";
import { SignInWithDiscordButton } from "./button/signIn";

const Auth: FC = () => {
	const { data: user, isLoading, isValidating } = useGetCurrentUser();
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	if (isLoading || isValidating || !mount) {
		return <Button color="green" variant="outline" loading />;
	}

	if (!user) {
		return <SignInWithDiscordButton />;
	}

	return (
		<Popover>
			<Popover.Trigger>
				<button
					type="button"
					className={css({
						borderRadius: "full",
						borderWidth: "2",
						borderStyle: "solid",
						borderColor: "gray.7",
						aspectRatio: "1 / 1",
						h: 10,
						w: 10,
						overflow: "hidden",
						transition: "all 0.2s",
						_hover: {
							borderColor: "green.8",
						},
					})}
				>
					<Image
						src={user.avatar ?? "https://cdn.discordapp.com/embed/avatars/0.png"}
						alt="avatar image"
						priority
						height={40}
						width={40}
					/>
				</button>
			</Popover.Trigger>
			<Popover.Content
				className={css({
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					gap: 1,
					px: 4,
					maxW: 64,
				})}
			>
				<div
					className={css({
						fontSize: "lg",
						fontWeight: "bold",
						px: 4,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					})}
				>
					{user.global_name ?? user.user_name}
				</div>
				<div
					className={css({
						fontSize: "sm",
						color: "gray.10",
						px: 4,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					})}
				>
					{user.email}
				</div>
				<Separator />
				<Button
					color="red"
					variant="outline"
					onClick={() => {
						signOut();
					}}
					className={css({
						fontSize: "sm",
						w: "full",
					})}
				>
					Sign out
				</Button>
			</Popover.Content>
		</Popover>
	);
};

export { Auth };
