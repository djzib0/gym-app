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
        className={`cursor-pointer px-4 py-1 w-full rounded-sm border border-blue-200 bg-blue-50 text-blue-400 font-medium shadow-sm focus:outline-none transition duration-150
          ${exercise._id && selectedTemplateIds.includes(exercise._id) && 'bg-green-200'}`}
        onClick={() => addToSelected(exercise._id)}
      >
        {exercise.name} - {exercise.bodyPart}
      </button>
    )
  });

  return (
    <section className='sectionContainer items-start gap-4'>
      <div className='flex flex-row gap-2'>
        <h3 className='sectionHeader'>Select exercises:</h3>
      </div>
      <div className='flex flex-col items-start gap-2'>
        {exerciseTemplatesDataArr}
      </div>
      {!isForTraining && templateId && 
        <button 
          className='formButton'
          onClick={() => handleConfirm()}
        >
            Add to template
        </button>
      }

      {isForTraining && trainingId && 
      <button onClick={() => handleConfirm()}>Add to training</button>}
    </section>
  )
}

export default ExerciseTemplateSelect