import Link from 'next/link'
import React from 'react'

const TrainingsDashboard = () => {
  return (
    <menu className='flex flex-row gap-4 bg-amber-200'>
      <Link 
        href={"/trainings"}
        className='hover:bg-emerald-200 rounded-md px-4'
        >
        Trainings
      </Link>
      <Link 
        href={"/trainings/trainingTemplates"}
        className='hover:bg-emerald-200 rounded-md px-4'
      >
        Templates
      </Link>
        
    </menu>
  )
}

export default TrainingsDashboard