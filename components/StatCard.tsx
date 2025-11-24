interface StatCardProps {
	value: string
	label: string
}

export const StatCard = ({ value, label }: StatCardProps) => {
	return (
		<div className="bg-card backdrop-blur-3xl border border-border rounded-2xl p-16 w-2/3 mx-auto md:w-full md:p-10 flex flex-col items-center">
			<div className="text-4xl md:text-5xl font-bold text-foreground mb-2 ">{value}</div>
			<div className="text-sm text-muted-foreground">{label}</div>
		</div>
	)
}
