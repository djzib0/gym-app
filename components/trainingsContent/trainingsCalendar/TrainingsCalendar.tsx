'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DayElement from './dayElement/DayElement';
import { formatDate, getCurrentWeekMondayDate, getToday } from '@/lib/utils';

const thisWeekMonday = getCurrentWeekMondayDate();

const TrainingsCalendar = () => {

  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedMondayDate, setSelectedMondayDate] = useState()
  const [selectedTraining, setSelectedTraining] = useState<TrainingType | null>(null);

  console.log(thisWeekMonday.getDate())

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
          onClick={() => setSelectedMondayDate(prevState => prevState + 7)}
          
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          +
        </button>

        <button 
          onClick={() => console.log("first")}
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          -
        </button>

      </section>

      <section className='sectionContainer gap-4'>
        <DayElement dayNumber={selectedMondayDate.getDate()} dayName={'Monday'} bgColor={'bg-[#126782]'} borderColor={'border-[#126782]'} textColor={'text-[#fefae0]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 1} dayName={'Tuesday'} bgColor={'bg-[#f5cb5c]'} borderColor={'border-[#f5cb5c]'} textColor={'text-[#e85d04]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 2} dayName={'Wednesday'} bgColor={'bg-[#531942]'} borderColor={'border-[#531942]'} textColor={'text-[#fefae0]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 3} dayName={'Thursday'} bgColor={'bg-[#cad4d8]'} borderColor={'border-[#cad4d8]'} textColor={'text-[#343a40]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 4} dayName={'Friday'} bgColor={'bg-[#a7c957]'} borderColor={'border-[#a7c957]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 5} dayName={'Saturday'} bgColor={'bg-[#fef4d7]'} borderColor={'border-[#fef4d7]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 6} dayName={'Sunday'} bgColor={'bg-[#dc2f02]'} borderColor={'border-[#dc2f02]'} textColor={'text-[#fefae0]'}/>
      </section>
    </>
  )
}

export default TrainingsCalendar