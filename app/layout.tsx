import { GeistSans } from 'geist/font'
import './globals.css'
import '@/app/styles/layout.scss'
import React from "react";
import MainLayout from "@/components/MainLayout";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'MerEasy',
  description: 'The only API you need to connect MRPEasy and Merit Aktiva!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
          <main>
              <MainLayout children={children}></MainLayout>
          </main>
      </body>
    </html>
  )
}
