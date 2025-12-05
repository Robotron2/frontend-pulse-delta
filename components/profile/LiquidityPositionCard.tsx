import React from "react"
import { TrendingUp } from "lucide-react"
import Link from "next/link"
import { LiquidityPositionCardProps } from "@/types/types"

export default function LiquidityPositionCard({
	marketId,
	question,
	amount,
	shares,
	percentEarned,
}: LiquidityPositionCardProps) {
	const isPositive = parseFloat(percentEarned) > 0

	return (
		<Link href={`/markets/market/${marketId}`}>
			<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-colors cursor-pointer">
				{/* Question */}
				<p className="text-white font-semibold text-base sm:text-lg mb-3 line-clamp-2">{question}</p>

				{/* Stats Row */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
					{/* Amount and Shares */}
					<div className="flex items-center gap-4">
						<div>
							<p className="text-gray-500 text-xs">Amount</p>
							<p className="text-white font-medium">{amount}</p>
						</div>
						<div>
							<p className="text-gray-500 text-xs">Shares</p>
							<p className="text-white font-medium">{shares.toLocaleString()}</p>
						</div>
					</div>

					{/* Percent Earned */}
					<div className="flex items-center gap-1.5">
						<TrendingUp className={`w-4 h-4 ${isPositive ? "text-green-500" : "text-red-500"}`} />
						<span className={`font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}>
							{isPositive ? "+" : ""}
							{percentEarned}% earned
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}
