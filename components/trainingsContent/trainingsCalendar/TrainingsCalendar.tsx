'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const TrainingsCalendar = () => {

  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedTraining, setSelectedTraining] = useState<TrainingType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTrainingsByDate(selectedWeek);
      if (res !== undefined) {
        setSelectedTraining(JSON.parse(JSON.stringify(res)))
      } else {
        setSelectedTraining(null)
      }
    };

    fetchData();
  }, [selectedWeek])

  return (
    <div className='flex flex-row gap-4'>
      {selectedWeek}
      {selectedTraining ? <Link href={`trainings/${selectedTraining._id}`}>{selectedTraining.title}</Link> : <p>No data</p>}
      <button 
        onClick={() => setSelectedWeek(prevSate => prevSate + 1)}
        className='border border-black rounded-md px-2 py-0'
      >
        +
      </button>

      <button 
        onClick={() => setSelectedWeek(prevSate => prevSate - 1)}
        className='border border-black rounded-md px-2 py-0'
      >
        -
      </button>

    </div>
  )
}

export default TrainingsCalendar