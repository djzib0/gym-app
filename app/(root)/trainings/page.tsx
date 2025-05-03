import TrainingsCalendar from '@/components/trainingsContent/trainingsCalendar/TrainingsCalendar';
import TrainingsContent from '@/components/trainingsContent/TrainingsContent';
import React from 'react'

const TrainingsPage = async () => {

  return (
    <main className='pageContainer'>
      <TrainingsCalendar />
      <TrainingsContent />
    </main>
  )
}

export default TrainingsPage