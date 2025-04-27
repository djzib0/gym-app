import TrainingTemplateSelect from '@/components/forms/trainingTemplateSelect/TrainingTemplateSelect';
import { getAllTrainingTemplatesByUserId } from '@/lib/actions';
import React from 'react'

const AddTrainingPage = async () => {

  const allTrainingTemplates = await getAllTrainingTemplatesByUserId("123");

  return (
    <div>
      <TrainingTemplateSelect trainingTemplatesData={JSON.parse(JSON.stringify(allTrainingTemplates))}/>
    </div>
  )
}

export default AddTrainingPage