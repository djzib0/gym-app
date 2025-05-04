import { TrainingType } from '@/lib/types'
import React from 'react'

const DayElement = (
  {
    dayNumber, 
    dayName, 
    training,
    bgColor,
    textColor
  }
  :
  {
    dayNumber: number; 
    dayName: string; 
    training?: TrainingType;
    bgColor: string;
    textColor: string
  }) => {

  return (
    <div className='flex flex-col sm:flex-row'>
      <div className={`flex flex-row sm:flex-col font-bold p-2
        uppercase ${bgColor} ${textColor} rounded-tl-sm rounded-tr-sm`}>
        <p>{dayNumber}</p>
        <p>{dayName}</p>
      </div>

      <div>{training?.title ? training.title : "Test name, remove it and change to blank"}</div>
    </div>
  )
}

// color for days
// mon - 126782
// tue - ffe000
// wed - 531942
// thu - cad4d8
// fri - 8ab17d
// sat - fef4d7
// sun - e76f51





export default DayElement