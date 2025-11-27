"use client"
import React, { useMemo } from "react"
import { ChevronsRight } from "lucide-react"
import { ProgressBar } from "@/components/form/ProgressBar"
import { Button } from "@/components/ui/button"
import { useCreateMarket } from "@/hooks/useCreateMarket"
import Step0_CategorySelection from "@/components/steps/Step0_CategorySelection"
import Step1_TypeSelection from "@/components/steps/Step1_TypeSelection"
import Step2_Outcomes from "@/components/steps/Step2_Outcomes"
import Step3_MarketDetails from "@/components/steps/Step3_MarketDetails"
import Step4_Review from "@/components/steps/Step4_Review"

const CreateMarket: React.FC = () => {
	const { currentStep, totalSteps, marketSteps, formData, handleNext, handleBack, handleSubmit } = useCreateMarket()

	const currentStepData = useMemo(
		() => marketSteps.find((step) => step.id === currentStep),
		[currentStep, marketSteps]
	)

	// Validation function for each step
	const isStepValid = useMemo(() => {
		// For multi-outcome markets, adjust step numbers
		const isMultiOutcome = formData.marketType === "multi"

		switch (currentStep) {
			case 1: // Step 0: Category Selection
				return formData.marketCategory !== "" && formData.marketCategory !== undefined

			case 2: // Step 1: Market Type Selection
				return formData.marketType !== "" && formData.marketType !== undefined

			case 3: // Step 2: Outcomes (only for multi-outcome) OR Market Details
				if (isMultiOutcome) {
					// Validate outcomes: at least 2 outcomes with non-empty options
					const validOutcomes = formData.outcomes?.filter((o) => o.option.trim() !== "") || []
					return validOutcomes.length >= 2
				} else {
					// This is Market Details for binary/scalar
					return (
						formData.question &&
						formData.question.trim() !== "" &&
						formData.liquidity &&
						Number(formData.liquidity) >= 100 &&
						formData.resolutionSource &&
						formData.resolutionSource.trim() !== "" &&
						formData.resolutionDate &&
						formData.resolutionDate.trim() !== ""
					)
				}

			case 4: // Step 3: Market Details (for multi) OR Review (for binary/scalar)
				if (isMultiOutcome) {
					// This is Market Details for multi-outcome
					return (
						formData.question &&
						formData.question.trim() !== "" &&
						formData.liquidity &&
						Number(formData.liquidity) >= 100 &&
						formData.resolutionSource &&
						formData.resolutionSource.trim() !== "" &&
						formData.resolutionDate &&
						formData.resolutionDate.trim() !== ""
					)
				} else {
					// This is Review for binary/scalar - validate everything
					return (
						formData.marketCategory !== "" &&
						formData.marketType !== "" &&
						formData.question &&
						formData.question.trim() !== "" &&
						formData.liquidity &&
						Number(formData.liquidity) >= 100 &&
						formData.resolutionSource &&
						formData.resolutionSource.trim() !== "" &&
						formData.resolutionDate &&
						formData.resolutionDate.trim() !== ""
					)
				}

			case 5: // Step 4: Review (only for multi-outcome)
				// Final validation for multi-outcome markets
				const validOutcomes = formData.outcomes?.filter((o) => o.option.trim() !== "") || []
				return (
					formData.marketCategory !== "" &&
					formData.marketType !== "" &&
					validOutcomes.length >= 2 &&
					formData.question &&
					formData.question.trim() !== "" &&
					formData.liquidity &&
					Number(formData.liquidity) >= 100 &&
					formData.resolutionSource &&
					formData.resolutionSource.trim() !== "" &&
					formData.resolutionDate &&
					formData.resolutionDate.trim() !== ""
				)

			default:
				return false
		}
	}, [currentStep, formData])

	const renderStepContent = () => {
		const isMultiOutcome = formData.marketType === "multi"

		// Multi-outcome render
		if (isMultiOutcome) {
			switch (currentStep) {
				case 1:
					return <Step0_CategorySelection />
				case 2:
					return <Step1_TypeSelection />
				case 3:
					return <Step2_Outcomes />
				case 4:
					return <Step3_MarketDetails />
				case 5:
					return <Step4_Review />
				default:
					return <div>Step not found.</div>
			}
		} else {
			// Binary or Scalar - skip outcomes step
			switch (currentStep) {
				case 1:
					return <Step0_CategorySelection />
				case 2:
					return <Step1_TypeSelection />
				case 3:
					return <Step3_MarketDetails />
				case 4:
					return <Step4_Review />
				default:
					return <div>Step not found.</div>
			}
		}
	}

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		e.stopPropagation()
		console.log("[Page] Form submit triggered on step:", currentStep)
		console.warn("[Page] Form submission blocked - use Deploy button only")
	}

	const handleNextClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()

		if (!isStepValid) {
			console.warn("[Page] Cannot proceed - step validation failed")
			return
		}

		console.log("[Page] Next button clicked on step:", currentStep)
		handleNext()
	}

	const handleBackClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		console.log("[Page] Back button clicked on step:", currentStep)
		handleBack()
	}

	const handleDeployClick = () => {
		if (!isStepValid) {
			console.warn("[Page] Cannot deploy - validation failed")
			return
		}

		console.log("[Page] Deploy button clicked - submitting form")
		const syntheticEvent = { preventDefault: () => {} } as React.FormEvent
		handleSubmit(syntheticEvent)
	}

	return (
		<div className="min-h-screen cosmic-gradient px-4">
			<main className="container pt-24 px-4">
				<div className="text-center mb-4">
					<h1 className="text-3xl sm:text-4xl font-extrabold text-foreground glow-text">
						Create Prediction Market
					</h1>
					<p className="text-foreground mt-2 max-w-xl mx-auto">
						Launch your own prediction market with our guided wizard. Choose from templates or create custom
						markets.
					</p>
				</div>

				<div className="bg p-4 sm:p-8">
					<ProgressBar currentStep={currentStep} totalSteps={totalSteps} steps={marketSteps} />

					<div className="mb-4 pb-4 text-center">
						<h2 className="text-2xl font-bold text-foreground">{currentStepData?.title}</h2>
						<p className="text-sm text-foreground mt-1">{currentStepData?.description}</p>
					</div>

					<form onSubmit={handleFormSubmit} className="space-y-8">
						{renderStepContent()}

						<div className={`${currentStep === 1 ? "justify-end" : "justify-between"} flex pt-6`}>
							{currentStep > 1 && (
								<Button
									type="button"
									onClick={handleBackClick}
									className="bg-transparent border border-secondary-light text-foreground shadow-none">
									Previous
								</Button>
							)}

							{currentStep < totalSteps ? (
								<Button
									type="button"
									onClick={handleNextClick}
									disabled={!isStepValid}
									className="bg-primary hover:bg-transparent hover:border hover:border-secondary-light disabled:opacity-50 disabled:cursor-not-allowed">
									Next Step
									<ChevronsRight className="h-4 w-4 ml-2" />
								</Button>
							) : (
								<Button
									type="button"
									onClick={handleDeployClick}
									disabled={!isStepValid}
									className="bg-primary text-primary-foreground hover:bg-transparent hover:border hover:border-secondary-light disabled:opacity-50 disabled:cursor-not-allowed">
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
