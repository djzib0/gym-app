'use client'
import { TrainingType } from '@/lib/types';
import React from 'react'
import TrainingTemplateSelect from '../trainingTemplateSelect/TrainingTemplateSelect';

const TrainingsContent = ({allTrainings}: {allTrainings: TrainingType[] | undefined}) => {


  // const addExampleTraining = async () => {
  //   addTraining(
  //     {
  //       userId: "123",
  //       trainingTemplateId: "6805d5f4bd7dk81ca96b3207a",
  //       title: "test title"
  //     },
  //   );
  // } 
  
  return (
    <div className='flex flex-col items-start gap-2'>
      All trainings
        <TrainingTemplateSelect trainingTemplatesData={allTrainings}/>
    </div>
  )
}

export default TrainingsContent