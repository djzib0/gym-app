import ExerciseTemplateSelect from '@/components/forms/exerciseTemplateSelect/ExerciseTemplateSelect';
import Link from 'next/link';
import React from 'react'

const AddToTemplatePage = async ({params}: {params: Promise<{templateId: string}>}) => {

  const templateId = (await params).templateId

  return (
    <main className='pageContainer'>
      <Link href={`/trainings/trainingTemplates/${templateId}`}>Back to template</Link>
      <ExerciseTemplateSelect 
        templateId={templateId} 
        />
    </main>
  )
}

export default AddToTemplatePage