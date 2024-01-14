import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const session = await supabase.auth.getSession();

    return (
        <div className="main-body flex flex-col min-h-screen">
            {session.data.session ? (
                <>
                    <Header />
                    <div className="flex-grow">{children}</div>
                    <Footer />
                </>
            ) : (
                <div className="flex-grow">{children}</div>
            )}
        </div>
    );
}
