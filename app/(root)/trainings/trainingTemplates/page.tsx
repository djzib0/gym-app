import TrainingTemplatesContent from '@/components/trainingTemplatesContent/TrainingTemplatesContent';
import { getAllTrainingTemplates } from '@/lib/actions';
import React from 'react'

const TrainingTemplatesPage = async () => {

  const allTrainingTemplatesData = await getAllTrainingTemplates();
  
  return (
    <div>
      <TrainingTemplatesContent allTrainingTemplatesData={JSON.parse(JSON.stringify(allTrainingTemplatesData))} />
    </div>
  )
}

export default TrainingTemplatesPage