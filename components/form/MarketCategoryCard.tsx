import { MarketCategoryCardProps } from "@/types/types"

export const MarketCategoryCard: React.FC<MarketCategoryCardProps> = ({ icon, title, isSelected = false, onClick }) => {
	const baseClasses =
		"p-8 border rounded-xl transition-all cursor-pointer flex justify-center w-3/4 mx-auto cosmic-gradient-2 shadow-md shadow-primary"

	// Conditional styling based on selection state
	const stateClasses = isSelected
		? "bg-accent/40 border-primary shadow-lg shadow-primary/20"
		: "bg-accent/10 border-border hover:bg-accent/20"

	return (
		<div className={`${baseClasses} ${stateClasses}`} onClick={onClick}>
			<div className="text-primary mb-3">{icon}</div>
			<h4 className="text-base font-semibold text-foreground mb-1">{title}</h4>
		</div>
	)
}
