import { addSetToExercise } from '@/lib/actions';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const SetForm = (
  {
    exerciseId, 
    defaultRepsCount = 4, 
    defaultWeight = 25, 
  }: {
    exerciseId: string;
    defaultRepsCount?: number;
    defaultWeight?: number;
  }) => {

  // state variables
  const [formData, setFormData] = useState({
    repsCount: defaultRepsCount ? defaultRepsCount : 0,
    weight: defaultWeight ? defaultWeight : 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value, type} = e.target
    if ("checked" in e.target) {
      const checked = e.target.checked
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked: value
        }
      })
    }
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

    const handleSubmit = async () => {
      addSetToExercise(exerciseId, formData)
    }

  return (
    <form className='flex flex-row gap-2'>

      <div className='flex flex-col'>
        <label
          className='formLabel'
          htmlFor='repsCount'
          >
          Reps
        </label>
        <input
          className='formInput'
          type='number'
          name='repsCount'
          value={formData.repsCount}
          onChange={handleChange}
          />
      </div>

      <div className='flex flex-col'>
        <label
          className='formLabel'
          htmlFor='repsCount'
          >
          Lifted weight
        </label>
        <input
          className='formInput'
          type='number'
          name='weight'
          value={formData.weight}
          onChange={handleChange}
          />
      </div>

      <button type='button' className='' onClick={
        (Number(formData.repsCount) === defaultRepsCount || Number(formData.repsCount) === 0) &&
        (Number(formData.weight) === defaultWeight || Number(formData.weight) === 0)
        ? () => {} 
        : () => handleSubmit()
      }>
        <FaCheck className={`ml-4 text-4xl
          ${
        (Number(formData.repsCount) === defaultRepsCount || Number(formData.repsCount) === 0) &&
        (Number(formData.weight) === defaultWeight || Number(formData.weight) === 0)
          ? 'text-gray-400' 
          : 'text-green-500' }
          `}/>
      </button>

    </form>
  )
}

export default SetForm