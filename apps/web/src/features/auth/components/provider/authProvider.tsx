"use client";

import { useSetSession } from "@/store/session";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { FC, ReactNode, useEffect } from "react";

type Props = {
	children: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
	const supabase = createBrowserSupabaseClient();
	const setSession = useSetSession();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(async (event, newSession) => {
			if (event === "SIGNED_OUT" || newSession === null) {
				setSession(null);
			} else {
				setSession(newSession);
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [setSession, supabase.auth]);

	return <> {children}</>;
};

export { AuthProvider };
