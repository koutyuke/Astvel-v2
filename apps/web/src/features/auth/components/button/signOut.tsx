"use client";

import { Button } from "@/components/button/button";
import { useState } from "react";
import { signOut } from "../../utils";

const SignOutButton = () => {
	const [loading, setLoading] = useState(false);
	return (
		<Button
			color="red"
			variant="outline"
			loading={loading}
			onClick={() => {
				setLoading(true);
				signOut();
				setLoading(false);
			}}
		>
			Sign out
		</Button>
	);
};

export { SignOutButton };
