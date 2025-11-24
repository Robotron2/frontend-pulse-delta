import { ReactNode } from "react"

interface FeatureCardProps {
	icon: ReactNode
	title: string
	description: string
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
	return (
		<div className="group backdrop-blur-sm rounded-2xl overflow-hidden border-gradient-glow w-2/3 mx-auto md:w-full  md:p-8">
			<div className="relative p-8 z-20">
				<div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
				<h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
				<p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
			</div>
		</div>
	)
}
