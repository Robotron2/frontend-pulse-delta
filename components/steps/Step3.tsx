import { useCreateMarket } from "@/hooks/useCreateMarket"
import React from "react"

// The component no longer needs props
const Step3_Review: React.FC = () => {
	// Retrieve all formData from context
	const { formData } = useCreateMarket()

	const description = formData.description || ""

	return (
		<div className="p-6 border border-border rounded-xl bg-accent/20 space-y-3">
			<h4 className="text-xl font-semibold text-primary mb-4">Final Market Configuration</h4>

			<div className="flex justify-between border-b border-border/50 pb-2">
				<span className="text-muted-foreground font-medium">Market Type:</span>
				<span className="text-foreground font-semibold capitalize">{formData.marketType}</span>
			</div>

			<div className="border-b border-border/50 pb-2">
				<p className="text-muted-foreground font-medium mb-1">Question:</p>
				<p className="text-foreground font-bold">{formData.question || "(Pending Input)"}</p>
			</div>

			{/* Added Description review for completeness */}
			<div className="border-b border-border/50 pb-2">
				<p className="text-muted-foreground font-medium mb-1">Description:</p>
				<p className="text-foreground italic text-sm">{description || "(None provided)"}</p>
			</div>

			<div className="flex justify-between border-b border-border/50 pb-2">
				<span className="text-muted-foreground font-medium">Trading Fee:</span>
				<span className="text-foreground font-semibold">{formData.tradingFee}%</span>
			</div>

			<div className="flex justify-between">
				<span className="text-muted-foreground font-medium">Initial Liquidity:</span>
				<span className="text-foreground font-semibold">${formData.liquidity} USDC</span>
			</div>

			<p className="pt-4 text-sm text-yellow-400">
				⚠️ IMPORTANT: Once deployed, this market is immutable and cannot be edited.
			</p>
		</div>
	)
}

export default Step3_Review
