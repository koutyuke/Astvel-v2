"use client";

import { Button } from "@/components/button/button";
import { FC, useState } from "react";
import { signInWithDiscord } from "../../utils";

const SignInWithDiscordButton: FC = () => {
	const [loading, setLoading] = useState(false);
	return (
		<Button
			color="green"
			variant="outline"
			loading={loading}
			onClick={() => {
				setLoading(true);
				signInWithDiscord();
				setLoading(false);
			}}
		>
			Sign in
		</Button>
	);
};

export { SignInWithDiscordButton };
