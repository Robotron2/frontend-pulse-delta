"use client"
import React, { useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProgressBar } from "@/components/form/ProgressBar"
import { Button } from "@/components/ui/button"
import { useCreateMarket } from "@/hooks/useCreateMarket"
import Step1_TypeSelection from "@/components/steps/Step1"
import Step2_MarketDetails from "@/components/steps/Step2"
import Step3_Review from "@/components/steps/Step3"
import Step0_CategorySeclection from "@/components/steps/Step0"

const CreateMarket: React.FC = () => {
	// 1. Consume state and handlers from the Context API
	const { currentStep, totalSteps, marketSteps, handleNext, handleBack, handleSubmit } = useCreateMarket()

	const currentStepData = useMemo(
		() => marketSteps.find((step) => step.id === currentStep),
		[currentStep, marketSteps]
	)

	// Conditional render of the current step component
	const renderStepContent = () => {
		// Step components no longer need props, as they use useCreateMarket internally
		switch (currentStep) {
			case 1:
				return <Step0_CategorySeclection />
			case 2:
				return <Step1_TypeSelection />
			case 3:
				return <Step2_MarketDetails />
			case 4:
				return <Step3_Review />
			default:
				return <div>Step not found.</div>
		}
	}

	return (
		// <div className="w-full max-w-4xl mx-auto">
		<div className="min-h-screen cosmic-gradient px-4">
			<main className="container pt-24 px-4">
				<div className="text-center mb-8">
					<h1 className="text-3xl sm:text-4xl font-extrabold text-foreground glow-text">
						Create Prediction Market
					</h1>
					<p className="text-muted-foreground mt-2 max-w-xl mx-auto">
						Launch your own prediction market on our decentralized platform.
					</p>
				</div>

				<div className="bg p-4 sm:p-8">
					{/* Progress Bar */}
					{/* Note: ProgressBar now uses state from context via its props (passed here) */}
					<ProgressBar currentStep={currentStep} totalSteps={totalSteps} steps={marketSteps} />

					{/* Step Content Header */}
					<div className="mb-8  pb-4 text-center">
						<h2 className="text-2xl font-bold text-foreground">Choose Market Category</h2>
						<p className="text-sm text-muted-foreground mt-1">{currentStepData?.description}</p>
					</div>

					{/* Step Content */}
					{/* handleSubmit is pulled directly from the context hook */}
					<form onSubmit={handleSubmit} className="space-y-8">
						{renderStepContent()}

						{/* Navigation Buttons */}
						<div className="flex justify-between pt-6 border-t border-border/50">
							{/* Back Button */}
							<Button
								type="button"
								onClick={handleBack} // Handler from context
								disabled={currentStep === 1}
								className="bg-accent/50 text-foreground hover:bg-accent/70 shadow-none disabled:opacity-30">
								<ChevronLeft className="h-4 w-4 mr-2" />
								Previous
							</Button>

							{/* Next/Submit Button */}
							{currentStep < totalSteps ? (
								<Button type="button" onClick={handleNext} className="bg-primary hover:bg-primary/90">
									Next Step
									<ChevronRight className="h-4 w-4 ml-2" />
								</Button>
							) : (
								<Button
									type="submit"
									className="bg-success text-success-foreground hover:bg-success/90">
									Deploy Market
								</Button>
							)}
						</div>
					</form>
				</div>
			</main>
		</div>
	)
}

export default CreateMarket
