import React from "react"
import { Zap, Code, Globe } from "lucide-react"
import { useCreateMarket } from "@/hooks/useCreateMarket"
import { MarketTypeCard } from "../form/MarketTypeCard"

const Step1_TypeSelection: React.FC = () => {
	const { formData, handleFormChange } = useCreateMarket()

	const marketTypes = [
		{ key: "binary", title: "Binary Number", description: "Yes/No or True/False outcomes.", icon: <Zap /> },
		{
			key: "multi",
			title: "Multi-Outcome Market",
			description: "Select one outcome from a list of possibilities.",
			icon: <Code />,
		},
		{
			key: "scalar",
			title: "Scalar Market",
			description: "Predict a range, such as a final score or index price.",
			icon: <Globe />,
		},
	]

	const onSelectType = (type: string) => {
		handleFormChange("marketType", type)
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
			{marketTypes.map((type) => (
				<MarketTypeCard
					key={type.key}
					icon={type.icon}
					title={type.title}
					description={type.description}
					isSelected={formData.marketType === type.key}
					onClick={() => onSelectType(type.key)}
				/>
			))}
		</div>
	)
}

export default Step1_TypeSelection
