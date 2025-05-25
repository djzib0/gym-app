import TrainingTemplatesContent from '@/components/trainingTemplatesContent/TrainingTemplatesContent';
import { getAllTrainingTemplatesByUserId } from '@/lib/actions';
import React from 'react';

const TrainingTemplatesPage = async () => {

  const allTrainingTemplatesData = await getAllTrainingTemplatesByUserId("123");

  return (
    <main className='pageContainer'>
      <TrainingTemplatesContent allTrainingTemplatesData={allTrainingTemplatesData} />
    </main>
  )
}

export default TrainingTemplatesPage