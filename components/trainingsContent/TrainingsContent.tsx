'use client'
import { addTraining } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React from 'react'

const TrainingsContent = ({allTrainings}: {allTrainings: TrainingType[] | undefined}) => {

  const allTrainingsArr = allTrainings && allTrainings.map((training) => {
    return (
      <Link
        href={`trainings/${training._id}`}
        key={training._id}
      >
        {training.title}
      </Link>
    )
  })

  const addExampleTraining = async () => {
    addTraining(
      {
        userId: "123",
        trainingTemplateId: "6805d5f4bd7d81ca96b3207a",
        title: "test title"
      },
    );
  } 
  
  return (
    <div>
      All trainings
        {allTrainingsArr}
      <button type='button' onClick={addExampleTraining}>Add example training</button>
    </div>
  )
}

export default TrainingsContent