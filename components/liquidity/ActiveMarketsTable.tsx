import { cn } from "@/lib/utils"
import { ActiveMarketPosition } from "@/types/types"

interface ActiveMarketsTableProps {
	markets: ActiveMarketPosition[]
}

export default function ActiveMarketsTable({ markets }: ActiveMarketsTableProps) {
	// Helper to style the prediction status
	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case "won":
				return "text-green-500"
			case "lost":
				return "text-red-500"
			case "pending":
				return "text-yellow-500"
			default:
				return "text-gray-400"
		}
	}

	return (
		<div className="bg-secondary-dark border border-white/5 rounded-2xl p-6 overflow-hidden">
			<h2 className="text-xl font-bold text-white mb-6">Active Market</h2>

			<div className="overflow-x-auto">
				<table className="w-full min-w-[600px]">
					{/* Table Header */}
					<thead>
						<tr className="border-b border-white/5">
							<th className="text-left py-4 text-base font-medium text-primary-foreground">Market</th>
							<th className="text-left py-4 text-base font-medium text-primary-foreground">Prediction</th>
							<th className="text-right py-4 text-base font-medium text-primary-foreground">Amount</th>
							<th className="text-right py-4 text-base font-medium text-primary-foreground">
								Potential Payout
							</th>
						</tr>
					</thead>

					{/* Table Body */}
					<tbody>
						{markets.length > 0 ? (
							markets.map((market) => (
								<tr
									key={market.id}
									className="border-b border-white/5 last:border-0 group hover:bg-white/[0.02] transition-colors">
									<td className="py-5 text-sm font-medium text-white">{market.marketId}</td>
									<td className={cn("py-5 text-sm font-medium", getStatusColor(market.prediction))}>
										{market.prediction}
									</td>
									<td className="py-5 text-sm font-medium text-gray-300 text-right font-mono">
										{market.amount}
									</td>
									<td className="py-5 text-sm font-bold text-white text-right font-mono">
										{market.payout}
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={4} className="py-8 text-center text-gray-500 text-sm">
									No active markets found.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}
