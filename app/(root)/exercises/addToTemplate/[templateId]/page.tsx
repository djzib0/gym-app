import { addExerciseTemplate, getAllExercises } from '@/lib/actions'
import { BodyParts, ExerciseType } from '@/lib/types';
import Link from 'next/link';
import React from 'react'

const AddToTemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  const exercisesData: ExerciseType[] | undefined = await getAllExercises();

  const exercisesDataArr = exercisesData && exercisesData.map((exercise) => {
    return (
      <li key={exercise._id}>{exercise.name}</li>
    )
  })

  // addExercise({});
  
  return (
    <ul>
      <Link href={`/trainings/trainingTemplates/${templateId}`}>Back to template</Link>
      {exercisesDataArr}
    </ul>
  )
}

export default AddToTemplatePage