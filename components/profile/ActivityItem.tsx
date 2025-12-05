import React from "react"
import { TrendingUp, TrendingDown, Plus, CheckCircle, XCircle, Clock } from "lucide-react"
import { ActivityItemProps } from "@/types/types"

export default function ActivityItem({ type, description, amount, timestamp, status }: ActivityItemProps) {
	const getIcon = () => {
		const iconClass = "w-4 h-4"
		switch (type) {
			case "trade":
				return status === "success" ? (
					<TrendingUp className={`${iconClass} text-green-500`} />
				) : (
					<TrendingDown className={`${iconClass} text-red-500`} />
				)
			case "create":
				return <Plus className={`${iconClass} text-orange-500`} />
			case "liquidity":
				return <TrendingUp className={`${iconClass} text-blue-500`} />
			case "resolve":
				return <CheckCircle className={`${iconClass} text-purple-500`} />
			default:
				return <TrendingUp className={iconClass} />
		}
	}

	const getStatusBadge = () => {
		switch (status) {
			case "success":
				return (
					<div className="flex items-center gap-1 text-green-500">
						<CheckCircle className="w-3 h-3" />
						<span className="text-xs">Success</span>
					</div>
				)
			case "failed":
				return (
					<div className="flex items-center gap-1 text-red-500">
						<XCircle className="w-3 h-3" />
						<span className="text-xs">Failed</span>
					</div>
				)
			case "pending":
				return (
					<div className="flex items-center gap-1 text-yellow-500">
						<Clock className="w-3 h-3" />
						<span className="text-xs">Pending</span>
					</div>
				)
		}
	}

	return (
		<div className="flex items-start gap-3 p-3 sm:p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
			{/* Icon */}
			<div className="mt-0.5">{getIcon()}</div>

			{/* Content */}
			<div className="flex-1 min-w-0">
				<p className="text-white text-sm font-medium truncate">{description}</p>
				<div className="flex items-center gap-2 mt-1">
					<span className="text-gray-400 text-xs">{timestamp}</span>
					{getStatusBadge()}
				</div>
			</div>

			{/* Amount */}
			{amount && (
				<div className="text-right">
					<p className={`text-sm font-bold ${status === "success" ? "text-green-500" : "text-gray-400"}`}>
						{amount}
					</p>
				</div>
			)}
		</div>
	)
}
