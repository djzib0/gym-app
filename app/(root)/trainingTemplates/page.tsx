import { getAllTrainings } from '@/lib/actions';
import Link from 'next/link';
import React from 'react'

const TrainingTemplatesPage = async () => {

  const trainingTemplates = await getAllTrainings();

  const trainingTemplatesArr = trainingTemplates && trainingTemplates.map((template) => {
      return (
        <Link key={template._id} href={`/trainingTemplates/${template._id}`}>{template.title}</Link>
      )
    })

  return (
    <div>
      {trainingTemplatesArr}
    </div>
  )
}

export default TrainingTemplatesPage