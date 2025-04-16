'use client'
import { addExercise,  } from '@/lib/actions'
import React, { useState } from 'react'

const TestForm = () => {

  const [formData, setFormData] = useState({
    comment: "testData"
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
    addExercise(formData);
  }
  
  return (
    <form className='w-1/1 flex flex-row justify-between gap-4 mx-4 my-2 text-gray-900 !z-10'>
        <input
          className='flex w-full text-start text-base pl-2 min-h-4 max-h-full rounded-md outline-none resize-none border border-gray-400'
          type='text'
          name='comment'
          max={3}
          required
          placeholder='Add new comment here...'
          value={formData.comment}
          onChange={handleChange}
        />


        <div className='flex flex-row gap-4 w-[100px] items-center justify-center text-gray-600'>
          <button type='button' onClick={handleSubmit} className='w-full border border-gray-600 rounded-md uppercase'>Add</button>
        </div>

        {/* {state?.error && <p>{state.error}</p>} */}
      </form>
  )
}

export default TestForm