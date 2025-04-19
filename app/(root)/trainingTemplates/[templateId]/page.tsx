import { getTrainingTemplate } from '@/lib/actions'
import { TrainingTemplateType } from '@/lib/types'
import React from 'react'

const TemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  const trainingTemplateData: TrainingTemplateType = templateId && await getTrainingTemplate(templateId)

  return (
    <div>{trainingTemplateData.title} {trainingTemplateData.userId}</div>
  )
}

export default TemplatePage