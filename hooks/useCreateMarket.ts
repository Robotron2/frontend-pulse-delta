import { CreateMarketContext } from "@/context/CreateMarketContext"
import { CreateMarketContextType } from "@/types/types"
import { useContext } from "react"

export const useCreateMarket = (): CreateMarketContextType => {
	const context = useContext(CreateMarketContext)
	if (!context) {
		throw new Error("useCreateMarket must be used within a CreateMarketProvider")
	}
	return context
}
