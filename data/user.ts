import { User } from "@/types/types"

export const mockUsers: User[] = [
	{
		id: "1",
		address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
		username: "CryptoTrader",
		totalVolume: "15,432.50 wDAG",
		marketsTraded: 45,
		marketsCreated: 12,
		lpValue: "8,250.00 wDAG",
		joinedAt: "2024-01-15",
	},
	{
		id: "2",
		address: "0x8Bc3d35Aa6123B0532825a2b844Fc9a7595f1bEc",
		username: "PredictionMaster",
		totalVolume: "28,910.75 wDAG",
		marketsTraded: 78,
		marketsCreated: 23,
		lpValue: "12,500.00 wDAG",
		joinedAt: "2023-11-20",
	},
]

// Current logged-in user (for demo)
export const currentUser = mockUsers[0]
