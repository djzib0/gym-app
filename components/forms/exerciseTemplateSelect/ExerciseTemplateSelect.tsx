'use client'
import { addExerciseToTraining, addExerciseToTrainingTemplate, getAllExerciseTemplates } from '@/lib/actions';
import { ExerciseTemplateType } from '@/lib/types'
import React, { useEffect, useState } from 'react'

const ExerciseTemplateSelect = ({ 
  templateId, 
  trainingId,
  isForTraining=false
}: {
  templateId?: string,
  trainingId?: string;
  isForTraining?: boolean  //when isForTraining passed as a true use function
  // to add exercise (based on exercise template) to the existing training (not 
  // training template)
}) => {

  // state variables
  const [selectedTemplateIds, setSelectedTemplateIds] = useState<string[]>([]);
  const [exerciseTemplatesData, setExerciseTemplatesData] = useState<ExerciseTemplateType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllExerciseTemplates("123");
      if (res !== undefined) {
        setExerciseTemplatesData(JSON.parse(JSON.stringify(res)))
      } else {
        setExerciseTemplatesData(null);
      }
    }

    fetchData();
  }, [])

  const addToSelected = (selectedId: string | undefined) => {
    if (!selectedId) return;

    setSelectedTemplateIds(prevState => 
      prevState.includes(selectedId)
        ? prevState.filter(id => id !== selectedId)
        : [...prevState, selectedId]
      )
  }

  const handleConfirm = () => {
    console.log("handling confirm")
    console.log(isForTraining, "is for training")
    console.log(selectedTemplateIds, " ids")
    if (!isForTraining && templateId) {
      addExerciseToTrainingTemplate(templateId, selectedTemplateIds)
    } else if (isForTraining && trainingId) {
      addExerciseToTraining(trainingId, selectedTemplateIds)
    }
  };

  const exerciseTemplatesDataArr = exerciseTemplatesData && exerciseTemplatesData.map((exercise) => {
    console.log(exercise, " exercise")
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
      {!isForTraining && templateId && <button onClick={() => handleConfirm()}>Add to template</button>}
      {isForTraining && trainingId && <button onClick={() => handleConfirm()}>Add to training</button>}
    </section>
  )
}

export default ExerciseTemplateSelect