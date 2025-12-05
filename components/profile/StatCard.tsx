import { StatCardProps } from "@/types/types"
import React from "react"

export default function StatCard({ label, value, icon, iconBg }: StatCardProps) {
	return (
		<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6">
			<div className="flex justify-between items-start mb-3">
				<p className="text-gray-400 text-sm">{label}</p>
				<div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center`}>{icon}</div>
			</div>
			<p className="text-white text-xl sm:text-2xl font-bold">{value}</p>
		</div>
	)
}
