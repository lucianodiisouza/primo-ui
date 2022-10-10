import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export function MultiStep({
  size,
  currentStep = 1,
  stepLabel = 'Passo',
  ofLabel = 'de',
}: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        {stepLabel} {currentStep} {ofLabel} {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
  stepLabel?: string
  ofLabel?: string
}

MultiStep.displayName = 'MultiStep'
