"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { TrendingUp, Menu, Droplet, Plus, User } from "lucide-react"
import { useState } from "react"
// import { ThemeToggle } from "./ThemeToggle"

export const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-none">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href={"/"} className="flex items-center gap-2 text-2xl font-bold">
						<span className="text-foreground">
							<span className="animate-pulse duration-100 ease-in-out">Pulse</span>Delta
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						<Link
							href={"/markets"}
							className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
							<TrendingUp className="w-5 h-5" />
							Market
						</Link>
						<Link
							href={"/create"}
							className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
							<Plus className="w-5 h-5" />
							Create
						</Link>
						<Link
							href={"/liquidity"}
							className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
							<Droplet className="w-5 h-5" />
							Liquidity
						</Link>
						<Link
							href={"/profile"}
							className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
							<User className="w-5 h-5" />
							Profile
						</Link>
					</div>

					<div className="flex items-center gap-4">
						{/* <ThemeToggle /> */}
						<Button
							variant="default"
							className="hidden md:inline-flex font-semibold text-base shadow-md shadow-gray-800 hover:bg-primary-dark transition-colors ease-in-out duration-300">
							Connect Wallet
						</Button>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-foreground"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							<Menu className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-border">
						<div className="flex flex-col gap-4">
							<Link
								href={"/markets"}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors">
								Market
							</Link>
							<button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
								Create
							</button>
							<button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
								Liquidity
							</button>
							<button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
								Profile
							</button>
							<Button
								variant="default"
								className="w-3/4 mx-auto hover:bg-primary-dark transition-colors ease-in-out duration-300">
								Connect Wallet
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
