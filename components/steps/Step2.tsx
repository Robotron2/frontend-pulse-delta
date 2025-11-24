import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useCreateMarket } from "@/hooks/useCreateMarket"
import { MarketFormData } from "@/types/types"

// The component no longer needs props
const Step2_MarketDetails: React.FC = () => {
	// Retrieve necessary state (formData) and handler (handleFormChange) from context
	const { formData, handleFormChange } = useCreateMarket()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target

		// CRITICAL FIX: Explicitly handle empty string for number fields.
		// If the input is empty, store the empty string.
		// Otherwise, convert the value to a number.
		if (id === "tradingFee" || id === "liquidity") {
			const finalValue = value === "" ? "" : Number(value)
			handleFormChange(id as keyof MarketFormData, finalValue)
			return
		}

		// Handle string inputs (question, description)
		handleFormChange(id as keyof MarketFormData, value)
	}

	return (
		<div className="space-y-6">
			<div>
				<label htmlFor="question" className="block text-sm font-medium text-foreground mb-2">
					Market Question
				</label>
				<Input
					id="question"
					placeholder="e.g., Will Bitcoin exceed $100k by Q4 2025?"
					value={formData.question} // Value from context state
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
					Description (Optional)
				</label>
				<Textarea
					id="description"
					placeholder="Provide context and rules for the market."
					value={formData.description} // Value from context state
					onChange={handleChange}
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label htmlFor="tradingFee" className="block text-sm font-medium text-foreground mb-2">
						Trading Fee (%)
					</label>
					<Input
						id="tradingFee"
						type="number"
						// Since we now allow "" to be stored, we must ensure the input value is correctly rendered.
						// If formData.tradingFee is 0.5 (initial), it renders fine. If it's "" it renders as empty.
						value={formData.tradingFee}
						onChange={handleChange}
						min={0}
						max={5}
					/>
				</div>
				<div>
					<label htmlFor="liquidity" className="block text-sm font-medium text-foreground mb-2">
						Initial Liquidity (USDC)
					</label>
					<Input
						id="liquidity"
						type="number"
						placeholder="Enter amount (e.g., 500)"
						value={formData.liquidity} // Value from context state
						onChange={handleChange}
						min={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default Step2_MarketDetails
