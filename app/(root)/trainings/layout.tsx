import TrainingsDashboard from '@/components/dashboards/trainingsDashboard/TrainingsDashboard'
import React from 'react'

const TrainingTemplatesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <TrainingsDashboard />
        {children}
    </>
  )
}

export default TrainingTemplatesLayout