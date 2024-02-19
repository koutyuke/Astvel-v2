import { createBrowserSupabaseClient } from "@/utils/supabase/client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_BASE_URL!;

const signInWithDiscord = async () => {
  const supabase = createBrowserSupabaseClient();
  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${baseUrl}/auth/callback/`,
      scopes: "identify email guilds",
    },
  });
};

export { signInWithDiscord };
