import { SwrKey } from "@/constant/swrKey";
import { useSessionValue } from "@/store/session";
import { User } from "@/types/model/user";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import useSWR from "swr";

const useGetCurrentUser = () => {
  const session = useSessionValue();
  const supabase = createBrowserSupabaseClient();

  const fetcher = () =>
    supabase.auth.getUser(session?.access_token).then((res) => {
      if (res.data.user === null) throw new Error("User not found");

      return {
        id: res.data.user.id,
        user_name: res.data.user.user_metadata.full_name,
        global_name: res.data.user.user_metadata.custom_claims.global_name ||
          null,
        avatar: res.data.user.user_metadata.avatar_url || null,
        email: res.data.user.email,
      } satisfies User;
    });

  return useSWR<User>(session ? SwrKey.CurrentUser : null, fetcher);
};

export { useGetCurrentUser };
