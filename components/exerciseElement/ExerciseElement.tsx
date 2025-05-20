'use client'
import { ExerciseType } from '@/lib/types';
import React, { useState } from 'react';
import { CgGym } from 'react-icons/cg';
import { PiCaretCircleDown, PiCaretCircleUp } from 'react-icons/pi';
import SetForm from '../forms/setForm/SetForm';
import SetElement from './setElement/SetElement';

const ExerciseElement = ({exerciseData}: {exerciseData: ExerciseType}) => {

  // state variables
  const [isExerciseInfoExpanded, setIsExerciseInfoExpanded] = useState(false);
  const [isAddSetFormOn, setIsAddSetFormOn] = useState(false);

  const setsArr = exerciseData.sets && exerciseData.sets.map((set, index) => {
    return (
      <SetElement key={index} reps={set.repsCount} weight={set.weight} />
    )
  })

  const toggleExerciseInfo = () => {
    setIsExerciseInfoExpanded(prevState => !prevState);
  };

  const toggleExpandFormSet = () => {
    setIsAddSetFormOn(prevState => !prevState);
  }

  return (
    <article className='sectionContainer '>
      <div
        className='flex flex-row justify-between'
      >
        <h3 className='sectionHeader'
        >
          <CgGym className='text-[#0084ff] text-3xl' />
          {exerciseData.name}
        </h3>

        <div className='flex flex-row gap-4 items-center text-3xl'>
          <button
            onClick={() => toggleExpandFormSet()}
            className="flex items-center justify-center gap-2 px-2 py-1 w-28 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold uppercase rounded-md transition-colors duration-200"
          >
            Add set
          </button>
          
          <button 
            type='button' 
            onClick={() => toggleExerciseInfo()}
          >
            {!isExerciseInfoExpanded ? <PiCaretCircleDown />: <PiCaretCircleUp />}
          </button>
        </div>

      </div>

      {isExerciseInfoExpanded && exerciseData.description}
      {isAddSetFormOn && exerciseData._id && <SetForm exerciseId={exerciseData._id} />}

      {setsArr && 
        <div className='grid grid-cols-3 underline mt-4'>
          <h3>Reps</h3>
          <h3>Weight</h3>
          <h3></h3>
        </div>}
      {setsArr}
    </article>
  )
}

export default ExerciseElement