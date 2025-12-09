import { Droplets } from "lucide-react"

interface LiquidityPositionProps {
	marketQuestion: string
	lpTokens: string
	value: string
	feesEarned: string
	image?: string
}

export default function LiquidityPositionCard({ marketQuestion, lpTokens, value, feesEarned }: LiquidityPositionProps) {
	return (
		<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2 -mx-2 gap-4 sm:gap-0">
			<div className="flex gap-4 w-full sm:w-auto">
				{/* Icon Box */}
				<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
					<Droplets className="w-5 h-5 text-green-500" />
				</div>

				{/* Market Details */}
				<div className="flex flex-col gap-1 flex-grow">
					{/* Removed max-w on mobile so text can flow naturally */}
					<h3 className="text-base font-medium text-white leading-tight sm:max-w-xs">{marketQuestion}</h3>
					<span className="text-xs text-gray-500 font-mono">{lpTokens} LP tokens</span>
				</div>
			</div>

			{/* Value Details */}
			{/* On mobile: pl-14 to align with text, left-aligned. On desktop: right-aligned */}
			<div className="flex flex-col gap-1 pl-14 sm:pl-0 sm:text-right w-full sm:w-auto">
				<span className="text-sm font-medium text-white font-mono">{value}</span>
				<span className="text-xs text-gray-500">{feesEarned} fees earned</span>
			</div>
		</div>
	)
}
