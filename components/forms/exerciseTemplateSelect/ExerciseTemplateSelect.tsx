'use client'
import { addExerciseToTrainingTemplate } from '@/lib/actions';
import { ExerciseTemplateType } from '@/lib/types'
import React, { useState } from 'react'

const ExerciseTemplateSelect = ({exerciseTemplatesData, templateId}: {exerciseTemplatesData: ExerciseTemplateType[] | undefined; templateId: string}) => {

  // state variables
  const [selectedTemplateIds, setSelectedTemplateIds] = useState<string[]>([]);

  const addToSelected = (selectedId: string | undefined) => {
    if (!selectedId) return;

    setSelectedTemplateIds(prevState => 
      prevState.includes(selectedId)
        ? prevState.filter(id => id !== selectedId)
        : [...prevState, selectedId]
      )
  }

  const exerciseTemplatesDataArr = exerciseTemplatesData && exerciseTemplatesData.map((exercise) => {
    return (
      <button 
        key={exercise._id}
        className={`cursor-pointer ${exercise._id && selectedTemplateIds.includes(exercise._id) && 'bg-red-200'}`}
        onClick={() => addToSelected(exercise._id)}
      >
        {exercise.name} - {exercise.bodyPart}
      </button>
    )
  });

  const selectedTemplateIdsArr = selectedTemplateIds.map((id) => {
    return (
      <p key={id}>{id}</p>
    )
  })

  return (
    <section className='flex flex-col items-start'>
      <div className='flex flex-row gap-'>
        Selected ids:
        {selectedTemplateIdsArr}
      </div>
      <div className='flex flex-col'>
        {exerciseTemplatesDataArr}
      </div>
      <button onClick={() => addExerciseToTrainingTemplate(templateId, selectedTemplateIds)}>Add to template</button>
    </section>
  )
}

export default ExerciseTemplateSelect