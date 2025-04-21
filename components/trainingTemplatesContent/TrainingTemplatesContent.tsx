'use client'
import React, { useState } from 'react'
import TrainingTemplateForm from '../forms/trainingTemplateForm/TrainingTemplateForm';
import { TrainingTemplateType } from '@/lib/types';
import Link from 'next/link';

const TrainingTemplatesContent = ({allTrainingTemplatesData}: {allTrainingTemplatesData: TrainingTemplateType[] | undefined}) => {

  //state variables
  const [isAddTrainingTemplateFormOn, setIsAddTrainingTemplateFormOn] = useState(false);

  const allTrainingTemplatesArr = allTrainingTemplatesData && allTrainingTemplatesData.map((trainingTemplate) => {
    return (
      <Link key={trainingTemplate._id} href={`./trainingTemplates/${trainingTemplate._id}`}>{trainingTemplate.title}</Link>
    )
  })
  
  const toggleTrainingTemplateForm = (bool?: boolean) => {
    if (bool) {
      setIsAddTrainingTemplateFormOn(bool)
    };

    setIsAddTrainingTemplateFormOn(prevState => !prevState);
  }

  return (
    <section>
      <button 
        className='cursor-pointer'
        onClick={() => toggleTrainingTemplateForm()}
      >
        Add new template
      </button>
      {isAddTrainingTemplateFormOn && <TrainingTemplateForm toggleClose={() => setIsAddTrainingTemplateFormOn(false)}/>}
      
      {allTrainingTemplatesArr}

    </section>
  )
}

export default TrainingTemplatesContent