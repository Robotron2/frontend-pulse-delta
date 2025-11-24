import { Market } from "@/types/types"

export const markets: Market[] = Array.from({ length: 39 }).map((_, idx) => {
	const categories = ["trending", "ending-soon", "high-value", "newest", "closed"] as const

	return {
		id: idx + 1,
		title: "PulseDelta Market",
		category: categories[idx % categories.length],
		question: `Sample market question number ${idx + 1}?`,
		liquidity: `${(Math.random() * 2).toFixed(2)} wDAG`,
		volume: `${(Math.random() * 0.1).toFixed(2)} wDAG`,
		duration: `${Math.floor(Math.random() * 40)}d left`,
		participants: Math.floor(Math.random() * 50),
	}
})
