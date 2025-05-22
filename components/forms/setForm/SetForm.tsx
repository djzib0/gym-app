import { addSetToExercise } from '@/lib/actions';
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const SetForm = (
  {
    exerciseId, 
    defaultRepsCount, 
    defaultWeight,
    setId,
    closeSetForm,
  }: {
    exerciseId: string;
    defaultRepsCount?: number;
    defaultWeight?: number;
    setId: string;
    closeSetForm?: () => void;
  }) => {

  // state variables
  const [formData, setFormData] = useState({
    repsCount: defaultRepsCount ? defaultRepsCount : 0,
    weight: defaultWeight ? defaultWeight : 0,
    _id: setId ? setId : "",
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

    if (closeSetForm) {
      closeSetForm()
    }
  }

  return (
    <form className='flex flex-row gap-2 mt-2'>

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

      <div className='flex flex-col items-center justify-end'>
        <button type='button' className='' onClick={
          (Number(formData.repsCount) === defaultRepsCount || (Number(formData.repsCount) === 0 || Number(formData.weight) === 0)) &&
          (Number(formData.weight) === defaultWeight || (Number(formData.repsCount) === 0 || Number(formData.weight) === 0))
          ? (closeSetForm ? () => closeSetForm() : () => {})
          : () => handleSubmit()
        }>
          <FaCheck className={`ml-4 text-4xl mb-1
            ${
          (Number(formData.repsCount) === defaultRepsCount || (Number(formData.repsCount) === 0 || Number(formData.weight) === 0)) &&
          (Number(formData.weight) === defaultWeight || (Number(formData.repsCount) === 0 || Number(formData.weight) === 0))
            ? 'text-gray-400' 
            : 'text-green-500' }
            `}/>
        </button>
      </div>

      

    </form>
  )
}

export default SetForm