import TrainingsContent from '@/components/trainingsContent/TrainingsContent';
import { getAllTrainingsByUserId } from '@/lib/actions';
import React from 'react'

const TrainingsPage = async () => {

  const allTrainings = await getAllTrainingsByUserId("123");
  
  return (
    <>
      <TrainingsContent allTrainings={JSON.parse(JSON.stringify(allTrainings))} />
    </>
  )
}

export default TrainingsPage