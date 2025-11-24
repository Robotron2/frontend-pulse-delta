import { CreateMarketContextType, MarketFormData, MarketStep } from "@/types/types"
import React, { useState, useMemo, createContext, useCallback } from "react"

export const MARKET_STEPS: MarketStep[] = [
	{ id: 1, title: "Market Category", description: "Select the best structure for your prediction market." },
	{ id: 2, title: "Market Type", description: "Select the outcome format for your prediction market." },
	{ id: 3, title: "Market Details", description: "Input the specifics of your prediction question and parameters." },
	{ id: 4, title: "Review & Deploy", description: "Final check before deploying your immutable market." },
]
export const TOTAL_STEPS = MARKET_STEPS.length

export const initialFormData: MarketFormData = {
	marketType: "binary",
	question: "",
	description: "",
	tradingFee: 0.5,
	liquidity: 500,
}

// Create the Context, initialized to undefined
export const CreateMarketContext = createContext<CreateMarketContextType | undefined>(undefined)

export const CreateMarketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [currentStep, setCurrentStep] = useState(1)
	const [formData, setFormData] = useState<MarketFormData>(initialFormData)

	// 1. Stabilize handleFormChange (Dependencies: [])
	const handleFormChange = useCallback((field: keyof MarketFormData, value: string | number) => {
		setFormData((prev) => ({ ...prev, [field]: value }))
	}, [])

	// 2. Stabilize handleNext (Dependencies: [currentStep, formData.question, formData.liquidity])
	const handleNext = useCallback(() => {
		console.log(`${currentStep}/${TOTAL_STEPS} `)

		// if (currentStep === 2) {
		// 	// --- Validation for Step 2 ---

		// 	// 2a. Check if question is present and non-empty (string check)
		// 	if (!formData.question || String(formData.question).trim() === "") {
		// 		console.error("Validation failed: Market Question cannot be empty.")
		// 		return
		// 	}

		// 	// 2b. Check liquidity (must be non-empty and a positive number)
		// 	const liquidityValue = formData.liquidity

		// 	// Check if input is empty (the component now passes "" for empty input)
		// 	if (liquidityValue === "") {
		// 		console.error("Validation failed: Initial Liquidity cannot be empty.")
		// 		return
		// 	}

		// 	// Check if it's a valid positive number (handles 0, negatives, non-finite numbers)
		// 	const liquidityValid = Number.isFinite(Number(liquidityValue)) && Number(liquidityValue) > 0
		// 	if (!liquidityValid) {
		// 		console.error("Validation failed: Initial Liquidity must be a positive number.")
		// 		return
		// 	}
		// }

		if (currentStep < TOTAL_STEPS) {
			setCurrentStep((prev) => prev + 1)
		}
	}, [currentStep, formData.question, formData.liquidity])

	// 3. Stabilize handleBack (Dependencies: [currentStep])
	const handleBack = useCallback(() => {
		if (currentStep > 1) {
			setCurrentStep((prev) => prev - 1)
		}
	}, [currentStep])

	// 4. Stabilize handleSubmit (Dependencies: [formData])
	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()

			console.log("Submitting form data:", formData)
			//Our deployment logic here

			setFormData(initialFormData)
			setCurrentStep(1)
		},
		[formData]
	)

	const contextValue = useMemo(
		() => ({
			formData,
			currentStep,
			totalSteps: TOTAL_STEPS,
			marketSteps: MARKET_STEPS,
			handleFormChange,
			handleNext,
			handleBack,
			handleSubmit,
		}),
		[formData, currentStep, handleFormChange, handleNext, handleBack, handleSubmit]
	)

	return <CreateMarketContext.Provider value={contextValue}>{children}</CreateMarketContext.Provider>
}
