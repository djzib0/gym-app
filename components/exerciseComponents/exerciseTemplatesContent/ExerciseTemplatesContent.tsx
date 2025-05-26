'use client'
import ExerciseTemplateForm from '@/components/forms/exerciseTemplateForm/ExerciseTemplateForm';
import { ExerciseType } from '@/lib/types';
import Link from 'next/link';
import React, { useState } from 'react';
import { GoChecklist } from 'react-icons/go';


const ExerciseTemplatesContent = ({
  allExercisesTemplatesData
}: {
  allExercisesTemplatesData: ExerciseType[]
}) => {

  //state variables
  const [isAddExerciseTemplateFormOn, setIsAddExerciseTemplateFormOn] = useState(false);
  

  const allExercisesTemplatesArr = allExercisesTemplatesData && allExercisesTemplatesData.map(exercise => {
    return (
      <Link
        key={exercise._id}
        href={`./exercisesTemplates/${exercise._id}`}
      >
        {exercise.name}
      </Link>
    )
  })

    const toggleExerciseTemplateForm = (bool?: boolean) => {
    if (bool) {
      setIsAddExerciseTemplateFormOn(bool)
    };

    setIsAddExerciseTemplateFormOn(prevState => !prevState);
  }

  return (
    <section className='sectionContainer'>
      <h3 className='sectionHeader'
      >
        <GoChecklist className='text-[#0084ff] text-3xl' />Templates
      </h3>
      <button 
        className='cursor-pointer'
        onClick={() => toggleExerciseTemplateForm()}
      >
       Add new template
      </button>

      {isAddExerciseTemplateFormOn && 
        <ExerciseTemplateForm toggleClose={() => setIsAddExerciseTemplateFormOn(false)}/>
      }

      <h3 className='font-semibold uppercase mt-4 mb-2'>All exercises</h3>
      <div className='flex flex-col'>
        {allExercisesTemplatesArr}
      </div>

    </section>
  )
}

export default ExerciseTemplatesContent