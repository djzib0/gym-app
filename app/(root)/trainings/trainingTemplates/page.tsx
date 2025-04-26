import TrainingTemplatesContent from '@/components/trainingTemplatesContent/TrainingTemplatesContent';
import { getAllTrainingTemplatesByUserId } from '@/lib/actions';
import React from 'react'

const TrainingTemplatesPage = async () => {

  const allTrainingTemplatesData = await getAllTrainingTemplatesByUserId("123");
  
  return (
    <div>
      <TrainingTemplatesContent allTrainingTemplatesData={JSON.parse(JSON.stringify(allTrainingTemplatesData))} />
    </div>
  )
}

export default TrainingTemplatesPage