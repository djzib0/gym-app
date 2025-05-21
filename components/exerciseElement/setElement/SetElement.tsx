import React from 'react'
import { BiSolidEdit, BiTrash } from 'react-icons/bi';

const SetElement = ({
  reps, 
  weight,
  toggleSetForm,
} : {
  reps: number;
  weight: number;
  toggleSetForm: () => void;
}) => {
  return (
    <div className='grid grid-cols-3 mt-2 text-3xl font-semibold'>
      <p className='text-[#F4631E]'>{reps}</p>
      <p className='text-[#309898]'>{weight}</p>
      <div className='flex flex-row justify-around'>
        <BiSolidEdit  onClick={() => toggleSetForm()} />
        <BiTrash />
      </div>
    </div>
  )
}

export default SetElement