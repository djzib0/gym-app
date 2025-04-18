'use client'

import { addExerciseTemplate } from '@/lib/actions'
import { ExerciseTemplateType, BodyParts } from '@/lib/types'
import React, { useState } from 'react'

const ExerciseTemplateForm = () => {

  const [formData, setFormData] = useState<ExerciseTemplateType>({
    userId: "124",
    name: "",
    bodyPart: "",
    description: "pull ups description",
    imgUrl: "",
    templateNote: "",
    initialWeight: 0,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>()

  // const [formErrors, setFormErrors] = useState<ExerciseTemplateType>({
  //   userId: "123",
  //   name: "Pull ups template",
  //   bodyPart: BodyParts.Chest,
  //   description: "pull ups description",
  //   imgUrl: "",
  //   templateNote: ""
  // })

  const BodyPartsOptions = Object.entries(BodyParts).map(([label, value]) => ({
    label,
    value,
  }));

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
    const res = await addExerciseTemplate(formData);
    console.log(res, " res in template form")
    setErrors(res)
  }

  return (
    <form className='flex flex-col'>
      <label
        className=''
        htmlFor='name'
      >
        Exercise name
      </label>
      <textarea 
        className=''
        name='name'
        value={formData.name}
        onChange={handleChange}
      />
      {errors?.error && errors.error}

      <label
        className=''
        htmlFor='bodyPart'
      >
       Body part
      </label>
      <select
        onChange={handleChange}
        name='bodyPart'
      >
        <option>---</option>
        {BodyPartsOptions.map((bodyPart) => (
          <option key={bodyPart.label} value={bodyPart.value}>
            {bodyPart.label}
          </option>
        ))}
      </select>

      <label
        className=''
        htmlFor='initialWeight'
      >
        Initial weight
      </label>
      <input
        type='number'
        min={0}
        className=''
        name='initialWeight'
        value={formData.initialWeight}
        onChange={handleChange}
      />

      <button type='button' onClick={handleSubmit}>Save</button>

    </form>
  )
}

export default ExerciseTemplateForm