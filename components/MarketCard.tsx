import { TYPE_BADGE_STYLES } from "@/data/constants"
import { Market } from "@/types/types"
import { ChartColumn, Clock5, User } from "lucide-react"
import Link from "next/link"

export default function MarketCard({ market }: { market: Market }) {
	// Get market type badge style
	const getMarketTypeBadge = () => {
		const styles: Record<string, string> = {
			binary: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
			multi: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
			scalar: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
		}
		return styles[market.marketType] || "bg-gray-500/20 text-gray-400"
	}

	const getMarketTypeLabel = () => {
		const labels: Record<string, string> = {
			binary: "Binary",
			multi: "Multi",
			scalar: "Scalar",
		}
		return labels[market.marketType] || market.marketType
	}

	// Render buttons based on market type
	const renderActionButtons = () => {
		if (market.marketType === "binary") {
			return (
				<>
					<button className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-success hover:bg-success-light hover:shadow-sm hover:shadow-success-foreground transition text-success-foreground font-bold text-sm sm:text-base">
						Buy | Yes
					</button>
					<button className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-destructive hover:bg-destructive-light hover:shadow-sm hover:shadow-destructive-foreground transition text-destructive-foreground font-bold text-sm sm:text-base">
						Buy | No
					</button>
				</>
			)
		}

		if (market.marketType === "multi") {
			return (
				<button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary/90 hover:shadow-sm hover:shadow-primary transition text-white font-bold text-sm sm:text-base">
					Trade Shares
				</button>
			)
		}

		if (market.marketType === "scalar") {
			return (
				<>
					<button className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-success hover:bg-success-light hover:shadow-sm hover:shadow-success-foreground transition text-success-foreground font-bold text-sm sm:text-base">
						Long
					</button>
					<button className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-destructive hover:bg-destructive-light hover:shadow-sm hover:shadow-destructive-foreground transition text-destructive-foreground font-bold text-sm sm:text-base">
						Short
					</button>
				</>
			)
		}

		// Fallback
		return (
			<button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary/90 transition text-white font-bold text-sm sm:text-base">
				Trade
			</button>
		)
	}

	return (
		<Link href={`/markets/market/${market.id}`} className="block">
			<div className="bg-secondary-dark flex flex-col items-center p-6 rounded-xl hover:border hover:border-primary-light hover:shadow-lg hover:shadow-primary-light transition-all cursor-pointer">
				{/* Title */}
				<h3 className="text-xl text-white font-medium text-center">{market.title}</h3>

				{/* Content Wrapper with sawtooth border */}
				<div
					className="
    relative w-full 
    bg-[url('/cardImage.png')] bg-no-repeat bg-center bg-contain
    p-6 sm:p-8 
    flex flex-col
  ">
					{/* ---- Inner actual content ---- */}
					<div className="flex flex-col w-full">
						{/* Tags Row */}
						<div className="flex justify-between items-center">
							<div className="flex gap-2">
								<div
									className={`text-xs font-medium rounded-md px-2 py-0.5 ${
										TYPE_BADGE_STYLES[market.type] ?? "bg-gray-800 text-gray-300"
									}`}>
									{market.type}
								</div>

								<div className={`text-xs font-medium rounded-md px-2 py-0.5 ${getMarketTypeBadge()}`}>
									{getMarketTypeLabel()}
								</div>
							</div>

							<div className="flex items-center gap-1 text-primary-gray">
								<User width={16} height={16} />
								<span className="text-sm">{market.participants}</span>
							</div>
						</div>

						{/* Question */}
						<p className="mt-4 text-white text-base sm:text-lg font-bold leading-snug">{market.question}</p>

						{/* Stats */}
						<div className="mt-4 text-xs flex justify-between w-full">
							<div className="flex flex-col items-center flex-1">
								<span className="flex items-center gap-1 text-gray-500">
									<ChartColumn className="w-4 h-4" />
									Liquidity
								</span>
								<span className="font-bold text-white text-sm">{market.liquidity}</span>
							</div>

							<div className="flex flex-col items-center flex-1">
								<span className="flex items-center gap-1 text-gray-500">
									<ChartColumn className="w-4 h-4" />
									Volume
								</span>
								<span className="font-bold text-white text-sm">{market.volume}</span>
							</div>

							<div className="flex flex-col items-center flex-1">
								<span className="flex items-center gap-1 text-gray-500">
									<Clock5 className="w-4 h-4" />
									Duration
								</span>
								<span className="font-bold text-white text-sm">{market.duration}</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex w-full gap-2 mt-4">{renderActionButtons()}</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
