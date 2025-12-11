import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LoadingOverlay } from "@/components/loading-overlay"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "WASB Gas Distributers - Premium LPG Gas & Energy Solutions",
  description:
    "Your trusted partner for reliable LPG gas delivery and energy services. Experience premium service with modern convenience.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Navigation />
        <Suspense fallback={<LoadingOverlay />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
