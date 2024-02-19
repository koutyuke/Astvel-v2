import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { sessionAtom } from "./atom";

export type { Session } from "@supabase/supabase-js";

export const useSession = () => useAtom(sessionAtom);

export const useSessionValue = () => useAtomValue(sessionAtom);

export const useSetSession = () => useSetAtom(sessionAtom);
