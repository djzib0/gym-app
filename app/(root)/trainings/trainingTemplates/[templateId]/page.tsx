import TrainingTemplateContent from '@/components/trainingTemplateContent/TrainingTemplateContent'
import { getExerciseTemplatesById, getTrainingTemplate } from '@/lib/actions'
import { ExerciseTemplateType, TrainingTemplateType } from '@/lib/types'
import React from 'react'

const TemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  const trainingTemplateData: TrainingTemplateType = templateId && await getTrainingTemplate(templateId)
  const exerciseTemplates: ExerciseTemplateType[] | undefined = trainingTemplateData && await getExerciseTemplatesById(trainingTemplateData.exerciseIds)

  const exerciseTemplatesArr = exerciseTemplates && exerciseTemplates.map((exercise) => {
    return (
      <p key={exercise._id}>{exercise.name}: {exercise.bodyPart}</p>
    )
  })

  return (
    <main className='pageContainer'>
      <TrainingTemplateContent trainingTemplateId={templateId} />
      {trainingTemplateData.title} {trainingTemplateData.userId}
      <h3>Exercises:</h3>
      {exerciseTemplatesArr}
    </main>
  )
}

export default TemplatePage