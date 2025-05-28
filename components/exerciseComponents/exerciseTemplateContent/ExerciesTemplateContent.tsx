import { ExerciseTemplateType } from '@/lib/types'
import React from 'react'
import { GoChecklist } from 'react-icons/go'

const ExerciseTemplateContent = (
  {
    exerciseTemplateData
  } :{
    exerciseTemplateData: ExerciseTemplateType
  }) => {
  return (
    <section className="sectionContainer">
      <h3 className='sectionHeader'
      >
        <GoChecklist className='text-[#0084ff] text-3xl' />
        {exerciseTemplateData.name} 
      </h3>
      
      <div className="space-y-3 text-gray-700">
        <div className='flex flex-row gap-4 items-center text-3xl'>          
          <button 
            type='button' 
          >
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Edit</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Delete</button>
      </div>
    </section>
  )
}

export default ExerciseTemplateContent