export interface StarProps {
	id: number
	left: number
	top: number
	delay: number
	duration: number
}
export const generateStars = (count: number): StarProps[] => {
	return Array.from({ length: count }, (_, i) => ({
		id: i,
		left: Math.random() * 100,
		top: Math.random() * 100,
		delay: Math.random() * 3,
		duration: 2 + Math.random() * 2,
	}))
}
