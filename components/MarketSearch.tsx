"use client"
import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group"

interface MarketSearchProps {
	className: string
	placeholder: string
}

const MarketSearch = ({ className, placeholder }: MarketSearchProps) => {
	return (
		<InputGroup className={className}>
			<InputGroupInput placeholder={placeholder} />
			<InputGroupAddon>
				<Search />
			</InputGroupAddon>
		</InputGroup>
	)
}

export default MarketSearch
