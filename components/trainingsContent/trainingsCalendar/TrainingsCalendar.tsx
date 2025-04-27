'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import React, { useEffect, useState } from 'react'

const TrainingsCalendar = () => {

  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedTraining, setSelectedTraining] = useState({title: "initialname"});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTrainingsByDate(selectedWeek);
      if (res) {
        setSelectedTraining(JSON.parse(JSON.stringify(res)))
      }
    };

    fetchData();
  }, [selectedWeek])

  return (
    <div className='flex flex-row gap-4'>
      {selectedWeek}
      {selectedTraining && <p>{selectedTraining.title}</p>}
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