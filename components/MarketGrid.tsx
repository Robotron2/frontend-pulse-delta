import { Market } from "@/types/types"
import MarketCard from "./MarketCard"
import MarketSkeleton from "./MarketSkeleton"

interface MarketGridProps {
	markets: Market[]
	loading?: boolean
}

export default function MarketGrid({ markets, loading }: MarketGridProps) {
	if (loading) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
				{[...Array(6)].map((_, i) => (
					<MarketSkeleton key={i} />
				))}
			</div>
		)
	}

	if (markets.length === 0)
		return (
			<div className="text-center py-20 text-primary-gray">
				<p>No markets found in this category.</p>
			</div>
		)

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{markets.map((m) => (
				<MarketCard key={m.id} market={m} />
			))}
		</div>
	)
}
