import ExerciseTemplateSelect from '@/components/exerciseTemplateSelect/ExerciseTemplateSelect';
import { getAllExerciseTemplates } from '@/lib/actions'
import { ExerciseTemplateType } from '@/lib/types';
import Link from 'next/link';
import React from 'react'

const AddToTemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  const exercisesData: ExerciseTemplateType[] | undefined = await getAllExerciseTemplates("123");

  return (
    <ul>
      <Link href={`/trainings/trainingTemplates/${templateId}`}>Back to template</Link>
      <ExerciseTemplateSelect 
        exerciseTemplatesData={JSON.parse(JSON.stringify(exercisesData))} 
        templateId={templateId} />
    </ul>
  )
}

export default AddToTemplatePage