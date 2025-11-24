import { MarketTypeCardProps } from "@/types/types"
import React from "react"

export const MarketTypeCard: React.FC<MarketTypeCardProps> = ({
	icon,
	title,
	description,
	isSelected = false,
	onClick,
}) => {
	const baseClasses = "p-4 border rounded-xl transition-all cursor-pointer"

	// Conditional styling based on selection state
	const stateClasses = isSelected
		? "bg-accent/40 border-primary shadow-lg shadow-primary/20"
		: "bg-accent/10 border-border hover:bg-accent/20"

	return (
		<div className={`${baseClasses} ${stateClasses}`} onClick={onClick}>
			<div className="text-primary mb-3">{icon}</div>
			<h4 className="text-base font-semibold text-foreground mb-1">{title}</h4>
			<p className="text-xs text-muted-foreground">{description}</p>
		</div>
	)
}
