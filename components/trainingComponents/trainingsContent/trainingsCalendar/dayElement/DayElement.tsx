import { TrainingType } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { CgGym } from "react-icons/cg";
import { MdDoneOutline } from 'react-icons/md';


const DayElement = (
  {
    dayNumber, 
    dayName, 
    trainings,
  }
  :
  {
    dayNumber: number; 
    dayName: string; 
    trainings?: TrainingType[]
  }) => {

  const trainingsArr = trainings && trainings.map(training => {
    return (
      <Link 
        key={training._id}
        className='flex flex-row gap-2 items-center justify-between bg-blue-400 text-white font-medium p-2 rounded-xs'
        href={`/trainings/${training._id}`}
        >
        <div className='flex flex-row gap-2'>
          <span className='text-2xl'><CgGym /></span>
          <p>{training.title}</p>
        </div>

        {training.isFinished && <MdDoneOutline className='text-2xl' />}

      </Link>
    )
  })

  return (
    <div className='flex flex-col sm:flex-row rounded-sm'>
      <div className={`flex flex-row sm:flex-col gap-4  bg-gray-300  text-gray-700 text-xl font-bold p-2
        uppercase rounded-tl-xs rounded-tr-xs sm:rounded-tr-none sm:rounded-bl-xs`}>
        <p>{dayNumber}</p>
        <p>{dayName}</p>
      </div>

      <div className={`bg-gray-50 text-slate-900 px-2 py-4 rounded-b-xs sm:rounded-bl-none sm:rounded-tr-xs`}>
          {trainingsArr && trainingsArr.length !== 0 ? trainingsArr : <p>No trainings on this date</p>}
      </div>

    </div>
  )
}






export default DayElement