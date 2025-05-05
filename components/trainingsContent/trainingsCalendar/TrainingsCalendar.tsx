'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DayElement from './dayElement/DayElement';
import { getCurrentWeekMondayDate, getToday } from '@/lib/utils';

const thisWeekMonday = getCurrentWeekMondayDate();

const TrainingsCalendar = () => {

  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedMondayDate, setSelectedMondayDate] = useState(thisWeekMonday)
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
    <>
      <section className='sectionContainer'>
        {selectedWeek}
        {selectedTraining ? <Link href={`trainings/${selectedTraining._id}`}>{selectedTraining.title}</Link> : <p>No data</p>}
        <button 
          onClick={() => setSelectedWeek(prevSate => prevSate + 1)}
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          +
        </button>

        <button 
          onClick={() => setSelectedWeek(prevSate => prevSate - 1)}
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          -
        </button>

      </section>

      <section className='sectionContainer gap-4'>
        <DayElement dayNumber={5} dayName={'Monday'} bgColor={'bg-[#126782]'} borderColor={'border-[#126782]'} textColor={'text-[#fefae0]'}/>
        <DayElement dayNumber={5} dayName={'Tuesday'} bgColor={'bg-[#f5cb5c]'} borderColor={'border-[#f5cb5c]'} textColor={'text-[#e85d04]'}/>
        <DayElement dayNumber={5} dayName={'Wednesday'} bgColor={'bg-[#531942]'} borderColor={'border-[#531942]'} textColor={'text-[#fefae0]'}/>
        <DayElement dayNumber={5} dayName={'Thursday'} bgColor={'bg-[#cad4d8]'} borderColor={'border-[#cad4d8]'} textColor={'text-[#343a40]'}/>
        <DayElement dayNumber={5} dayName={'Friday'} bgColor={'bg-[#a7c957]'} borderColor={'border-[#a7c957]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={5} dayName={'Saturday'} bgColor={'bg-[#fef4d7]'} borderColor={'border-[#fef4d7]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={5} dayName={'Sunday'} bgColor={'bg-[#dc2f02]'} borderColor={'border-[#dc2f02]'} textColor={'text-[#fefae0]'}/>
      </section>
    </>
  )
}

export default TrainingsCalendar