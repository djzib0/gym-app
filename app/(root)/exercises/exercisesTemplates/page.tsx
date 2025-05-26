import ExerciseTemplatesContent from '@/components/exerciseComponents/exerciseTemplatesContent/ExerciseTemplatesContent';
import { getAllExerciseTemplates } from '@/lib/actions'
import React from 'react'

const ExercisesTemplatesPage = async () => {

  const allExercisesTemplatesData = await getAllExerciseTemplates("123");

  return (
    <main>
      <ExerciseTemplatesContent allExercisesTemplatesData={allExercisesTemplatesData} />
    </main>
  )
}

export default ExercisesTemplatesPage