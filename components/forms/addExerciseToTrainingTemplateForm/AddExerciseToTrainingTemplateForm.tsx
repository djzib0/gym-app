import { getAllExercises } from '@/lib/actions';
import React from 'react'

const AddExerciseToTrainingTemplateForm = async () => {

  const exercisesData = await getAllExercises();

  const exercisesDataArr = exercisesData && exercisesData.map((exercise) => {
    return (
      <li key={exercise._id}>{exercise.description}</li>
    )
 })

  return (
    <>
      {exercisesDataArr}
    </>
  )
}

export default AddExerciseToTrainingTemplateForm