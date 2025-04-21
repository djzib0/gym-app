'use client'
import React, { useState } from 'react'
import AddExerciseToTrainingTemplateForm from '../forms/addExerciseToTrainingTemplateForm/AddExerciseToTrainingTemplateForm';

const TrainingTemplateContent = () => {

  // state variables
  const [isAddExerciseFormOn, setIsAddExerciseFormOn] = useState(false);

  const toggleAddExerciseForm = (bool?: boolean) => {
    if (bool) {
      setIsAddExerciseFormOn(bool);
    };

    setIsAddExerciseFormOn(prevState => !prevState);
  }

  return (
    <section>
      <button type='button' onClick={() => toggleAddExerciseForm}>Add exercise</button>
      {isAddExerciseFormOn && <AddExerciseToTrainingTemplateForm />}
    </section>
  )
}

export default TrainingTemplateContent