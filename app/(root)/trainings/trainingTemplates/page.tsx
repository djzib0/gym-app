import TrainingTemplatesContent from '@/components/trainingTemplatesContent/TrainingTemplatesContent';
import { getAllTrainingTemplatesByUserId } from '@/lib/actions';
import React from 'react'

const TrainingTemplatesPage = async () => {

  const allTrainingTemplatesData = await getAllTrainingTemplatesByUserId("123");
  
  return (
    <main className='pageContainer'>
      <TrainingTemplatesContent allTrainingTemplatesData={JSON.parse(JSON.stringify(allTrainingTemplatesData))} />
    </main>
  )
}

export default TrainingTemplatesPage