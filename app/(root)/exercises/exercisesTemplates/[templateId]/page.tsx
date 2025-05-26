import ExerciseElement from '@/components/trainingExerciseElement/TrainingExerciseElement';
import { getExerciseTemplateById } from '@/lib/actions';
import { ExerciseTemplateType } from '@/lib/types';
import React from 'react'

const ExerciseTemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId;

  const exerciseTemplateData: ExerciseTemplateType | undefined = templateId && await getExerciseTemplateById(templateId);

  return (
    <div>
      {/* {exerciseTemplateData && 
        
      } */}
    </div>
  )
}

export default ExerciseTemplatePage