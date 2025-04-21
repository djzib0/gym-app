import TrainingTemplateContent from '@/components/trainingTemplateContent/TrainingTemplateContent'
import { getTrainingTemplate } from '@/lib/actions'
import { TrainingTemplateType } from '@/lib/types'
import React from 'react'

const TemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  const trainingTemplateData: TrainingTemplateType = templateId && await getTrainingTemplate(templateId)

  return (
    <section>
      <TrainingTemplateContent />
      {trainingTemplateData.title} {trainingTemplateData.userId}
    </section>
  )
}

export default TemplatePage