"use client"
import React from "react"

import { ThemeProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

import "./app.css"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CreateMarketProvider } from "@/context/CreateMarketContext"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-poppins",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(poppins.variable, "font-sans antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
					<CreateMarketProvider>
						<TooltipProvider>
							<Toaster />
							<Sonner />
							<Navbar />
							{children}
							<Footer />
						</TooltipProvider>
					</CreateMarketProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
