import React, { useState } from 'react';

const SetForm = (
  {
    exerciseId, 
    repsCount, 
    weight, 
    liftedWeight
  }: {
    exerciseId: string;
    repsCount?: number;
    weight?: number;
    liftedWeight?: number;
  }) => {

  const [formData, setFormData] = useState({
    repsCount: repsCount ? repsCount : 0,
    weight: weight ? weight : 0,
    liftedWeight: liftedWeight ? liftedWeight : 0,
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
      console.log(formData, "submitting")
      
    }

  return (
    <form>
      <label
        className='formLabel'
        htmlFor='repsCount'
      >
        Reps
      </label>
      <input
        className='formInput'
        name='repsCount'
        value={formData.repsCount}
        onChange={handleChange}
      />

      <button type='button' className='formButton' onClick={handleSubmit}>Add</button>

    </form>
  )
}

export default SetForm