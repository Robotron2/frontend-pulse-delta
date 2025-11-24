import { ReactNode } from "react"

interface CategoryCardProps {
	icon: ReactNode
	label: string
}

export const CategoryCard = ({ icon, label }: CategoryCardProps) => {
	return (
		<div className="group backdrop-blur-sm rounded-2xl bg-background shadow-primary shadow-sm w-2/3 mx-auto md:w-full p-20 md:p-10 text-2xl md:text-lg">
			<div className="flex items-center justify-center gap-3">
				<div className="text-2xl group-hover:animate-ping duration-300 transition-transform">{icon}</div>
				<span className="text-foreground font-semibold">{label}</span>
			</div>
		</div>
	)
}
