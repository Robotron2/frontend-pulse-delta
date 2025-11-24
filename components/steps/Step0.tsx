import React from "react"
import { Bitcoin, CloudSun, Drama, Grid, Volleyball, Vote } from "lucide-react"
import { useCreateMarket } from "@/hooks/useCreateMarket"
import { MarketCategoryCard } from "../form/MarketCategoryCard"

const Step0_CategorySeclection: React.FC = () => {
	const { formData, handleFormChange } = useCreateMarket()

	const categoryTypes = [
		{ key: "weather", title: "Weather", icon: <CloudSun /> },
		{ key: "entertainment", title: "Entertainment", icon: <Drama /> },
		{ key: "sport", title: "Sport", icon: <Volleyball /> },
		{ key: "politics", title: "Politics", icon: <Vote /> },
		{ key: "crypto", title: "Crypto", icon: <Bitcoin /> },
		{ key: "others", title: "Others", icon: <Grid /> },
	]

	const onSelectType = (type: string) => {
		handleFormChange("marketType", type)
	}

	return (
		<div className="container p-4">
			<div className="title">
				<h2>Choose Market Category</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-0 pt-4">
				{categoryTypes.map((type) => (
					<MarketCategoryCard
						key={type.key}
						icon={type.icon}
						title={type.title}
						isSelected={formData.marketType === type.key}
						onClick={() => onSelectType(type.key)}
					/>
				))}
			</div>
		</div>
	)
}

export default Step0_CategorySeclection
