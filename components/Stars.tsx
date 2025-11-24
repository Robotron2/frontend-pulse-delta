import { generateStars, StarProps } from "@/lib/starGenerator"
import React, { useMemo } from "react"

const NUM_STARS = 80

export const Stars = () => {
	const stars: StarProps[] = useMemo(() => {
		return generateStars(NUM_STARS)
	}, [])

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{stars.map((star) => (
				<div
					key={star.id}
					className="absolute w-[2px] h-[2px] bg-foreground rounded-full animate-twinkle"
					style={{
						left: `${star.left}%`,
						top: `${star.top}%`,
						animationDelay: `${star.delay}s`,
						animationDuration: `${star.duration}s`,
					}}
				/>
			))}
		</div>
	)
}
