'use client'
import { addTrainignTemplate } from '@/lib/actions'
import { TrainingTemplateType } from '@/lib/types'
import React, { useState } from 'react'

const TrainingTemplateForm = () => {

  const [formData, setFormData] = useState<TrainingTemplateType>({
    userId: "123",
    title: "",
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
    console.log(formData)
    const res = await addTrainignTemplate(formData)
    console.log(res, " res in training template form")
  }

  return (
    <form className='flex flex-col'>
      <label
        className=''
        htmlFor='name'
      >
        Training title
      </label>
      <textarea
        className='border-black border'
        name='title'
        value={formData.title}
        onChange={handleChange}
      />

      <button type='button' onClick={handleSubmit}>Add</button>

    </form>
  )
}

export default TrainingTemplateForm