import { Market } from "@/types/types"
import { ChartColumn, Clock5, User } from "lucide-react"

export default function MarketCard({ market }: { market: Market }) {
	return (
		<div className="p-6 pb-0 rounded-xl border border-gray-800 hover:border-primary-light hover:shadow-md hover:shadow-primary-light transition-colors">
			{/* Title */}
			<h3 className="text-xl text-white font-medium text-center">{market.title}</h3>

			{/* Content Wrapper */}
			<div className="inner mt-4 bg-secondary-light px-3 py-5 rounded-md">
				{/* Tags & Participants Row */}
				<div className="flex justify-between items-center w-full">
					{/* Category Tag: Muted background, smaller font, rounded */}
					<div className="category text-xs font-medium rounded-md bg-gray-700 text-gray-300 px-2 py-0.5">
						{market.category}
					</div>
					{/* Participants: Muted icon and number */}
					<div className="participants flex items-center gap-1 text-primary-gray">
						<User width={16} height={16} />
						<span className="text-sm">{market.participants}</span>
					</div>
				</div>

				{/* Question */}
				<p className="mt-4 text-white text-lg font-bold leading-snug">{market.question}</p>

				{/* --- Stats row --- */}
				<div className="mt-6 text-xs flex justify-between gap-1 pt-4">
					{/* Stat Item - Liquidity */}
					<div className="flex flex-col items-center w-1/3">
						<span className="flex items-center gap-1 mb-1 text-gray-500">
							<ChartColumn width={16} height={12} />
							Liquidity
						</span>
						<span className="font-bold text-white text-sm">{market.liquidity}</span>
					</div>

					{/* Stat Item - Volume */}
					<div className="flex flex-col items-center w-1/3">
						<span className="flex items-center gap-1 mb-1 text-gray-500">
							<ChartColumn width={16} height={12} />
							Volume
						</span>
						<span className="font-bold text-white text-sm">{market.volume}</span>
					</div>

					{/* Stat Item - Duration */}
					<div className="flex flex-col items-center w-1/3">
						<span className="flex items-center gap-1 mb-1 text-gray-500">
							<Clock5 width={16} height={12} />
							Duration
						</span>
						<span className="font-bold text-white text-sm">{market.duration}</span>
					</div>
				</div>
				{/* --- End Stats row --- */}

				{/* Action buttons */}
				<div className="flex justify-between gap-2 mt-6">
					{/* Buy Yes Button: Bright green */}
					<button className="w-1/2 px-4 py-3 rounded-lg bg-success hover:bg-success-light hover:shadow-sm hover:shadow-success-foreground transition text-success-foreground font-bold text-base">
						Buy | Yes
					</button>
					{/* Buy No Button: Bright red */}
					<button className="w-1/2 px-4 py-3 rounded-lg bg-destructive hover:bg-destructive-light hover:shadow-sm hover:shadow-destructive-foreground transition text-destructive-foreground font-bold text-base">
						Buy | No
					</button>
				</div>
			</div>
		</div>
	)
}
