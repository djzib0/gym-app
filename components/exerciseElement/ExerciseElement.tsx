'use client'
import { ExerciseType } from '@/lib/types'
import React, { useState } from 'react'

const ExerciseElement = ({exerciseData}: {exerciseData: ExerciseType}) => {

  // state variables
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div>
      <button type='button' onClick={() => toggleExpand()}>Expand</button>
      {exerciseData.name}
      {isExpanded && exerciseData.description}
    </div>
  )
}

export default ExerciseElement