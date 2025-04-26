import { TrainingType } from '@/lib/types';
import React, { useState } from 'react'

const TrainingTemplateSelect = ({trainingTemplatesData}: {trainingTemplatesData: TrainingType[] | undefined}) => {

  // state variablesl
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>();
  const [formData, setFormData] = useState({
    trainingDate: new Date().toISOString().split('T')[0]
  })

  const allTrainingsArr = trainingTemplatesData && trainingTemplatesData.map((training) => {
    return (
      <button 
        key={training._id}
        className={`cursor-pointer ${training._id && selectedTemplateId === training._id && 'bg-red-200'}`}
        onClick={() => addToSelected(training._id ? training._id : "")}
      >
        {training.title}
      </button>
    )
  })

  const addToSelected = (selectedId: string) => {
    if (!selectedId) return;

    setSelectedTemplateId(prevState => 
      prevState === selectedId
      ? ""
      : selectedId
    )
  }

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

  console.log(formData.trainingDate)

  return (
    <section>
      {allTrainingsArr}

      <form>
        <input 
          type='date' 
          name='trainingDate' 
          value={formData.trainingDate} 
          onChange={handleChange}
        />
      </form>

    </section>
  )
}

export default TrainingTemplateSelect