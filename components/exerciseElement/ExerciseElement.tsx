'use client'
import { ExerciseType } from '@/lib/types';
import React, { useState } from 'react';
import { CgGym } from 'react-icons/cg';
import { PiCaretCircleDown, PiCaretCircleUp } from 'react-icons/pi';
import SetForm from '../forms/setForm/SetForm';
import SetElement from './setElement/SetElement';

const ExerciseElement = ({
  exerciseData,
}: {
  exerciseData: ExerciseType;
}) => {

  // state variables
  const [isExerciseInfoExpanded, setIsExerciseInfoExpanded] = useState(false);
  const [isAddSetFormOn, setIsAddSetFormOn] = useState(false);
  const [selectedSetData, setSelectedSetData] = useState({
    repsCount: 0,
    weight: 0,
    _id: "",
  })

  const toggleExerciseInfo = () => {
    setIsExerciseInfoExpanded(prevState => !prevState);
  };

  const toggleExpandFormSet = (repsCount: number, weight: number, _id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedSetData(prevState => {
      return (
        {
          repsCount: repsCount ? repsCount : 0,
          weight: weight ? weight : 0,
          _id: _id ? _id : "",
        }
      )
    })
    setIsAddSetFormOn(prevState => !prevState);
  }

  const setsArr = exerciseData.sets && exerciseData.sets.map((set, index) => {
    return (
      <SetElement 
        key={index} 
        reps={set.repsCount} 
        weight={set.weight} 
        toggleSetForm={() => toggleExpandFormSet(set.repsCount, set.weight, set._id)}
        exerciseId={exerciseData._id ? exerciseData._id : ""}
        setId={set._id}
      />
    )
  })

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
            onClick={() => toggleExpandFormSet(0, 0, "")}
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
      {isAddSetFormOn && exerciseData._id && 
      <SetForm 
        defaultRepsCount={selectedSetData.repsCount} 
        defaultWeight={selectedSetData.weight}
        setId={selectedSetData._id}
        exerciseId={exerciseData._id}
        closeSetForm={() => setIsAddSetFormOn(false)}
      />}

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