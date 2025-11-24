export default function MarketSkeleton() {
	return (
		<div className="p-4 rounded-xl border border-gray-800 bg-black/30 animate-pulse">
			{/* Title */}
			<div className="h-4 w-32 bg-gray-700 rounded"></div>

			{/* Question */}
			<div className="mt-4 h-5 w-3/4 bg-gray-700 rounded"></div>
			<div className="mt-2 h-5 w-1/2 bg-gray-700 rounded"></div>

			{/* Stats */}
			<div className="mt-6 space-y-2">
				<div className="h-3 w-40 bg-gray-700 rounded"></div>
				<div className="h-3 w-36 bg-gray-700 rounded"></div>
				<div className="h-3 w-28 bg-gray-700 rounded"></div>
			</div>

			{/* Buttons */}
			<div className="flex gap-2 mt-6">
				<div className="h-8 w-20 bg-gray-700 rounded"></div>
				<div className="h-8 w-20 bg-gray-700 rounded"></div>
			</div>
		</div>
	)
}
