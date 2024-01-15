import { createClient } from '@supabase/supabase-js';

export const createFetch = (options: Pick<RequestInit, "next" | "cache">) => (url: RequestInfo | URL, init?: RequestInit) => {
    return fetch(url, {
        ...init,
        ...options,
    });
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        fetch: createFetch({
            cache: 'no-store',
        }),
    },
});

export default supabase;
