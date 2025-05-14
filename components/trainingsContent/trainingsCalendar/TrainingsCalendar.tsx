'use client'
import { getAllTrainingsByDate } from '@/lib/actions';
import { TrainingType } from '@/lib/types';
import React, { useEffect, useState } from 'react'
import DayElement from './dayElement/DayElement';
import { filterTrainingsByDate, getCurrentWeekMondayDate, getDayNumber, getWeekNumberFromMonday } from '@/lib/utils';
import { GiWeightLiftingUp } from 'react-icons/gi';
import NextButton from '@/components/ui/nextButton/NextButton';
import PreviousButton from '@/components/ui/previousButton/PreviousButton';

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

  return (
    <>
      <section className='sectionContainer'>
        <h3 className='sectionHeader'
        >
          <GiWeightLiftingUp className='text-[#0084ff] text-3xl' />Trainings
        </h3>
      
      <div className='flex flex-row justify-between items-center'>
        <PreviousButton handleFunc={() => gotoPreviousWeek()} />
        <p className='font-medium text-xl'>Week {getWeekNumberFromMonday(selectedMondayDate)}</p>
        <NextButton handleFunc={() => goToNextWeek()}/>
      </div>

      </section>

      <section className='sectionContainer gap-4'>
        <DayElement 
          dayNumber={selectedMondayDate.getDate()} 
          dayName={'Monday'}
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 0) : undefined}

        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 1)} 
          dayName={'Tuesday'} 
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 1) : undefined}
        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 2)} 
          dayName={'Wednesday'}
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 2) : undefined}
        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 3)} 
          dayName={'Thursday'}
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 3) : undefined}
        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 4)} 
          dayName={'Friday'} 
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 4) : undefined}

        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 4)} 
          dayName={'Saturday'} 
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 5) : undefined}
        />
        <DayElement 
          dayNumber={getDayNumber(selectedMondayDate, 5)} 
          dayName={'Sunday'} 
          trainings={selectedTrainings ? filterTrainingsByDate(selectedMondayDate, selectedTrainings, 6) : undefined}
        />
      </section>
    </>

  )
}

export default TrainingsCalendar