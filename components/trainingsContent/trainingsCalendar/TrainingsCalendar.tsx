'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DayElement from './dayElement/DayElement';
import { formatDate, getCurrentWeekMondayDate, getDayNumber } from '@/lib/utils';

const thisWeekMonday = getCurrentWeekMondayDate();

const TrainingsCalendar = () => {

  const [selectedMondayDate, setSelectedMondayDate] = useState<Date>(thisWeekMonday)
  const [selectedTrainings, setSelectedTrainings] = useState<TrainingType[] | null>(null);


  useEffect(() => {
    setSelectedMondayDate(thisWeekMonday);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTrainingsByDate(selectedMondayDate);
      if (res !== undefined) {
        setSelectedTrainings(JSON.parse(JSON.stringify(res)))
      } else {
        setSelectedTrainings(null)
      }
    };

    fetchData();
  }, [selectedMondayDate])

  console.log(selectedTrainings, " selected trainings")

  const goToNextWeek = () => {
      setSelectedMondayDate(prevState => {
        const newMonday = new Date(prevState);
        newMonday.setDate(prevState.getDate() + 7);

        return newMonday;
      })
  }

  const gotoPreviousWeek = () => {
    setSelectedMondayDate(prevState => {
      const newMonday = new Date(prevState);
      newMonday.setDate(prevState.getDate() - 7);

      return newMonday;
    })
  }

  // const testTraining = selectedTrainings?.filter(training => {
  //   const dayNumber = ((training.trainingDate.split("-"))[1].slice(0, 2))
  //   console.log(dayNumber, " day number")
  //   console.log(selectedMondayDate.getDate() + 3)
  //   return selectedMondayDate.getDate() + 3 === Number(dayNumber)
  // });
  // console.log(testTraining, " test training")

  return (
    <>
      <section className='sectionContainer'>
        {selectedMondayDate?.toString()}
        <button 
          onClick={() => goToNextWeek()}
          
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          +
        </button>

        <button 
          onClick={() => gotoPreviousWeek()}
          className='border border-black rounded-md px-2 py-0 w-16'
        >
          -
        </button>

      </section>
      
      <section className='sectionContainer gap-4'>
        <DayElement dayNumber={selectedMondayDate.getDate()} dayName={'Monday'} bgColor={'bg-[#126782]'} borderColor={'border-[#126782]'} textColor={'text-[#fefae0]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 1} dayName={'Tuesday'} bgColor={'bg-[#f5cb5c]'} borderColor={'border-[#f5cb5c]'} textColor={'text-[#e85d04]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 2} dayName={'Wednesday'} bgColor={'bg-[#531942]'} borderColor={'border-[#531942]'} textColor={'text-[#fefae0]'}/>
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 3)} 
          dayName={'Thursday'} bgColor={'bg-[#cad4d8]'} 
          borderColor={'border-[#cad4d8]'} 
          textColor={'text-[#343a40]'}
          // trainings={selectedTrainings?.filter(training => new Date(training.trainingDate).getDay() === selectedMondayDate.getDate() + 3)}
        />




        <DayElement dayNumber={selectedMondayDate.getDate() + 4} dayName={'Friday'} bgColor={'bg-[#a7c957]'} borderColor={'border-[#a7c957]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 5} dayName={'Saturday'} bgColor={'bg-[#fef4d7]'} borderColor={'border-[#fef4d7]'} textColor={'text-[#344e41]'}/>
        <DayElement dayNumber={selectedMondayDate.getDate() + 6} dayName={'Sunday'} bgColor={'bg-[#dc2f02]'} borderColor={'border-[#dc2f02]'} textColor={'text-[#fefae0]'}/>
      </section>
    </>
  )
}

export default TrainingsCalendar