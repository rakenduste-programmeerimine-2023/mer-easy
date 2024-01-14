import {type NextRequest, NextResponse} from 'next/server'
import { protectedRoutes } from "@/app/routes/routes";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const session = await supabase.auth.getSession();

    if (!session.data.session && protectedRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/?message=Unauthorized! Please log in to see this page.', request.url))
    }
}
