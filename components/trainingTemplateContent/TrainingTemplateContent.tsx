'use client'
import { addExerciseTemplate } from '@/lib/actions'
import { BodyParts } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

const TrainingTemplateContent = ({trainingTemplateId}: {trainingTemplateId: string | undefined}) => {



  return (
    <section>
      {trainingTemplateId && <Link href={`/exercises/addToTemplate/${trainingTemplateId}`}>Add exercises to template</Link>}
      <button onClick={() => addExerciseTemplate({
        userId: "123",
        name: "Pull ups",
        description: "Exercise description",
        bodyPart: BodyParts.Chest,
        imgUrl: "",
        templateNote: "",
      })}>Add test exercise to database</button>
    </section>
  )
}

export default TrainingTemplateContent