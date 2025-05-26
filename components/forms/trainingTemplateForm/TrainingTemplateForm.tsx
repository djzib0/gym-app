'use client'
import { addTrainingTemplate } from '@/lib/actions'
import { TrainingTemplateType } from '@/lib/types'
import React, { useState } from 'react'

const TrainingTemplateForm = ({toggleClose}: {toggleClose?: () => void}) => {

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
    const res = await addTrainingTemplate(formData)
    if (res.success) {
      if (toggleClose) {
        toggleClose();
      }
    }
  }

  return (
    <form className='flex flex-col gap-2 max-w-md'>
      <label
        className='formLabel'
        htmlFor='name'
      >
        Title
      </label>
      <textarea
        className='formTextArea'
        name='title'
        value={formData.title}
        onChange={handleChange}
      />

      <button type='button' className='formButton' onClick={handleSubmit}>Add</button>

    </form>
  )
}

export default TrainingTemplateForm