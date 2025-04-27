import TrainingsCalendar from '@/components/trainingsContent/trainingsCalendar/TrainingsCalendar';
import TrainingsContent from '@/components/trainingsContent/TrainingsContent';
import React from 'react'

const TrainingsPage = async () => {

  return (
    <>
      <TrainingsCalendar />
      <TrainingsContent />
    </>
  )
}

export default TrainingsPage