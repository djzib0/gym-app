import { TrainingType } from '@/lib/types'
import React from 'react'

const DayElement = (
  {
    dayNumber, 
    dayName, 
    training,
    bgColor,
    borderColor,
    textColor,
    trainings,
  }
  :
  {
    dayNumber: number; 
    dayName: string; 
    training?: TrainingType;
    bgColor: string;
    borderColor: string;
    textColor: string;
    trainings?: TrainingType[]
  }) => {

  console.log(trainings, "in day", dayNumber)

  return (
    <div className='flex flex-col sm:flex-row rounded-lg'>
      <div className={`flex flex-row sm:flex-col gap-4 text-xl font-bold p-2
        uppercase ${bgColor} ${textColor} rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg`}>
        <p>{dayNumber}</p>
        <p>{dayName}</p>
      </div>

      <div className={`bg-[#e9ecef] border ${borderColor} text-black px-2 py-4 rounded-b-lg sm:rounded-bl-none sm:rounded-tr-lg`}>
          <p className=''>
          </p>
      </div>

    </div>
  )
}

// color for days
// mon - 126782
// tue - ffe000
// wed - 531942
// thu - cad4d8
// fri - a7c957
// sat - fef4d7
// sun - e76f51





export default DayElement