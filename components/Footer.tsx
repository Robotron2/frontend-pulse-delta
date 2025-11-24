import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
	return (
		<footer className="border-none bg-card/50 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex items-center gap-2 text-2xl font-bold text-primary">
						<h1>PulseDelta</h1>
					</div>

					<div className="flex flex-wrap justify-center gap-6 text-sm text-foreground md:text-muted-foreground">
						<button className="hover:text-foreground transition-colors">Terms</button>
						<button className="hover:text-foreground transition-colors">Policy</button>
						<button className="hover:text-foreground transition-colors">Doc</button>
						<button className="hover:text-foreground transition-colors">Support</button>
					</div>

					<div className="flex items-center gap-6">
						<span className="text-sm text-muted-foreground mr-4">Contact Us</span>
						<Link href={"/"} className="w-8 h-8 rounded-full flex items-center justify-center">
							<Image src={"/google.png"} alt="google-icon" width={29} height={29} />
						</Link>
						<Link href={"/"} className="w-8 h-8 rounded-full flex items-center justify-center">
							<Image src={"/md.png"} alt="medium-icon" width={30} height={31} />
						</Link>
						<Link href={"/"} className="w-8 h-8 rounded-full flex items-center justify-center">
							<Image src={"/tg.png"} alt="telegram-icon" width={29} height={29} />
						</Link>
						<Link href={"/"} className="w-8 h-8 rounded-full flex items-center justify-center">
							<Image src={"/x.png"} alt="x-icon" width={29} height={29} />
						</Link>
					</div>
				</div>

				<div className="text-center text-sm text-muted-foreground mt-8 pt-8">
					© 2025 PulseDelta. All rights reserved. <br /> Powered by BlockDAG Network
				</div>
			</div>
		</footer>
	)
}
