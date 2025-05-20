'use client'
import Link from 'next/link'
import React from 'react'

const TrainingsContent = () => {

  return (
    <div className='flex flex-col items-start gap-2'>
      Here will be calendar with all trainings (calendar?)
      <Link href={`trainings/add`}>Add new training</Link>
    </div>
  )
}

export default TrainingsContent