import { getExerciseTemplateById } from '@/lib/actions';
import { ExerciseTemplateType } from '@/lib/types';
import React from 'react';
import ExerciseTemplateContent from '@/components/exerciseComponents/exerciseTemplateContent/ExerciesTemplateContent';

const ExerciseTemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId;

  const result = await getExerciseTemplateById(templateId);
  let exerciseTemplateData: ExerciseTemplateType | null = null;

  if ('error' in result) {
    console.error(result.error);
  } else {
    exerciseTemplateData = result;
  }

  return (
    <main className='pageContainer'>
      {exerciseTemplateData && 
      <ExerciseTemplateContent exerciseTemplateData={exerciseTemplateData}/>}
    </main>
  )
}

export default ExerciseTemplatePage