"use client"

const categories = [
	{ id: "trending", label: "Trending" },
	{ id: "ending-soon", label: "Ending Soon" },
	{ id: "high-value", label: "High Value" },
	{ id: "newest", label: "Newest" },
	{ id: "closed", label: "Closed" },
]

interface Props {
	active: string
	onChange: (category: string) => void
}

export default function MarketFilters({ active, onChange }: Props) {
	return (
		<div className="flex gap-4 justify-between items-center flex-wrap mb-8 md:-mt-8">
			<div className="category-wrapper bg-secondary-light p-2 rounded-lg">
				{categories.map((c) => (
					<button
						key={c.id}
						className={`px-4 py-2 rounded-lg text-sm transition 
          ${active === c.id ? "border border-primary text-primary" : "border-gray-0"}`}
						onClick={() => onChange(c.id)}>
						{c.label}
					</button>
				))}
			</div>

			<div className="hidden md:block select-wrapper bg-secondary-light p-1 rounded-lg pr-2">
				<select
					className="ml-auto text-primary-foreground bg-inherit active:outline-none focus:outline-none rounded-lg px-3 py-2"
					value={active}
					onChange={(e) => onChange(e.target.value)}>
					{categories.map((c) => (
						<option key={c.id} value={c.id}>
							{c.label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
