'use client'
import Link from 'next/link'
import React from 'react'

const TrainingTemplateContent = ({trainingTemplateId}: {trainingTemplateId: string | undefined}) => {



  return (
    <section>
      {trainingTemplateId && <Link href={`/exercises/addToTemplate/${trainingTemplateId}`}>Add exercises to template</Link>}
    </section>
  )
}

export default TrainingTemplateContent