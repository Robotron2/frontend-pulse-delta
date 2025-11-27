import React from "react"
import { Plus, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCreateMarket } from "@/hooks/useCreateMarket"

const Step2_Outcomes: React.FC = () => {
	const { formData, handleFormChange } = useCreateMarket()

	const outcomes = formData.outcomes || []

	const handleOutcomeChange = (id: string, field: "option" | "description", value: string) => {
		const updatedOutcomes = outcomes.map((outcome) =>
			outcome.id === id ? { ...outcome, [field]: value } : outcome
		)
		handleFormChange("outcomes", updatedOutcomes)
	}

	const addOutcome = () => {
		const newOutcome = {
			id: Date.now().toString(),
			option: "",
			description: "",
		}
		handleFormChange("outcomes", [...outcomes, newOutcome])
	}

	const removeOutcome = (id: string) => {
		if (outcomes.length <= 2) return // Minimum 2 outcomes required
		const updatedOutcomes = outcomes.filter((outcome) => outcome.id !== id)
		handleFormChange("outcomes", updatedOutcomes)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault()
		}
	}

	return (
		<div className="w-full max-w-3xl mx-auto">
			{/* Header */}
			<div className="text-center mb-8">
				<h2 className="text-2xl font-semibold text-white mb-2">Market Details</h2>
				<p className="text-gray-400 text-sm">
					Provide clear and specific information about your prediction market
				</p>
			</div>

			<div className="space-y-6">
				{/* Outcomes */}
				{outcomes.map((outcome, index) => (
					<div key={outcome.id} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-4">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold text-white">Outcome {index + 1}</h3>
							{outcomes.length > 2 && (
								<Button
									type="button"
									variant="ghost"
									size="sm"
									onClick={() => removeOutcome(outcome.id)}
									className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
									<Trash2 className="w-4 h-4" />
								</Button>
							)}
						</div>

						{/* Option Name */}
						<div>
							<label
								htmlFor={`option-${outcome.id}`}
								className="block text-sm font-medium text-gray-300 mb-2">
								Option {String.fromCharCode(65 + index)}
							</label>
							<Input
								id={`option-${outcome.id}`}
								placeholder={`e.g., Option ${String.fromCharCode(65 + index)}`}
								value={outcome.option}
								onChange={(e) => handleOutcomeChange(outcome.id, "option", e.target.value)}
								onKeyDown={handleKeyDown}
								className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500"
							/>
						</div>

						{/* Description (Optional) */}
						<div>
							<label
								htmlFor={`description-${outcome.id}`}
								className="block text-sm font-medium text-gray-300 mb-2">
								Description (optional)
							</label>
							<Textarea
								id={`description-${outcome.id}`}
								placeholder="Provide additional context for this outcome"
								value={outcome.description}
								onChange={(e) => handleOutcomeChange(outcome.id, "description", e.target.value)}
								onKeyDown={handleKeyDown}
								rows={2}
								className="bg-zinc-900 border-zinc-800 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 resize-none"
							/>
						</div>
					</div>
				))}

				{/* Add Outcome Button */}
				{outcomes.length < 10 && (
					<Button
						type="button"
						onClick={addOutcome}
						variant="outline"
						className="w-full border-dashed border-2 border-zinc-700 hover:border-orange-500 hover:bg-orange-500/10 text-gray-400 hover:text-orange-500">
						<Plus className="w-4 h-4 mr-2" />
						Add Outcome (max 10)
					</Button>
				)}
			</div>
		</div>
	)
}

export default Step2_Outcomes
