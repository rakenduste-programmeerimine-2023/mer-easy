import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import {redirect} from "next/navigation";

export default function Login({searchParams}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
      'use server'

      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const cookieStore = cookies()
      const supabase = createClient(cookieStore)

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return redirect('/?message=Could not authenticate user')
      }
      return redirect('/home')
  }

  return (
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form
            className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            action={signIn}
        >
          <label className="text-md" htmlFor="email">Email</label>
          <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
          />
          <label className="text-md" htmlFor="password">Password</label>
          <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
          />
          <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">Sign In</button>
          {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
          )}
        </form>
      </div>
  )
}
