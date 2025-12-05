"use client"

import { useState } from "react"
import { TrendingUp, Users, PlusCircle, Droplets, Menu, Bell, User as UserIcon } from "lucide-react"
import StatCard from "@/components/profile/StatCard"
import LiquidityPositionCard from "@/components/profile/LiquidityPositionCard"
import ActivityItem from "@/components/profile/ActivityItem"
import { currentUser } from "@/data/user"
import { mockActivities, mockLiquidityPositions } from "@/data/markets"

export default function ProfilePage() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const stats = [
		{
			label: "Total Volume",
			value: currentUser.totalVolume,
			icon: <TrendingUp className="w-4 h-4 text-red-500" />,
			iconBg: "bg-red-500/10",
		},
		{
			label: "Market Traded",
			value: currentUser.marketsTraded.toString(),
			icon: <Users className="w-4 h-4 text-purple-500" />,
			iconBg: "bg-purple-500/10",
		},
		{
			label: "Market Created",
			value: currentUser.marketsCreated.toString(),
			icon: <PlusCircle className="w-4 h-4 text-pink-500" />,
			iconBg: "bg-pink-500/10",
		},
		{
			label: "LP Value",
			value: currentUser.lpValue,
			icon: <Droplets className="w-4 h-4 text-yellow-500" />,
			iconBg: "bg-yellow-500/10",
		},
	]

	return (
		<div className="min-h-screen cosmic-gradient">
			{/* Mobile Header */}
			<div className="flex justify-center bg-red-500">
				<div className="absolute z-20 top-52 left-0 border-primary border-2 rounded-lg h-1 w-3/4 mx-auto self-center">
					H
				</div>
			</div>
			<main className="container mx-auto pt-16 px-4 max-w-7x">
				<div className="lg:hidden bg-zinc-900/80 backdrop-blur border-b border-zinc-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
					<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						<Menu className="w-6 h-6 text-white" />
					</button>
					<div className="flex items-center gap-3">
						<Bell className="w-5 h-5 text-gray-400" />
						<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
							<UserIcon className="w-5 h-5 text-white" />
						</div>
					</div>
				</div>

				{/* Stats Grid with Wavy Border Container */}
				<div className="relative mb-8 bg-red-400 ">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
						{stats.map((stat, index) => (
							<StatCard key={index} {...stat} />
						))}
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
					{/* Liquidity Positions - Takes 2/3 on desktop */}
					<div className="lg:col-span-2">
						<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-6">
							<h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
								Liquidity Position
							</h2>

							<div className="space-y-3 sm:space-y-4">
								{mockLiquidityPositions.map((position) => (
									<LiquidityPositionCard key={position.id} {...position} />
								))}
							</div>

							{mockLiquidityPositions.length === 0 && (
								<div className="text-center py-12">
									<Droplets className="w-12 h-12 text-gray-600 mx-auto mb-3" />
									<p className="text-gray-400">No liquidity positions yet</p>
								</div>
							)}
						</div>
					</div>

					{/* Recent Activities - Takes 1/3 on desktop */}
					<div className="lg:col-span-1">
						<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-6">
							<h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Recent Activities</h2>

							<div className="space-y-3">
								{mockActivities.map((activity) => (
									<ActivityItem key={activity.id} {...activity} />
								))}
							</div>

							{mockActivities.length === 0 && (
								<div className="text-center py-12">
									<TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-3" />
									<p className="text-gray-400">No recent activities</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
