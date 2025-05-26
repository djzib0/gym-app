import ExercisesDashboard from '@/components/dashboards/exercisesDashboard/ExercisesDashboard'
import React from 'react'

const ExercisesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <ExercisesDashboard />
      {children}
    </>
  )
}

export default ExercisesLayout