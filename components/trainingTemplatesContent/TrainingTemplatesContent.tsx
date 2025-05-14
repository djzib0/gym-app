'use client'
import React, { useEffect, useState } from 'react'
import TrainingTemplateForm from '../forms/trainingTemplateForm/TrainingTemplateForm';
import { TrainingTemplateType } from '@/lib/types';
import Link from 'next/link';
import { GoChecklist } from 'react-icons/go';
import { getAllTrainingTemplatesByUserId } from '@/lib/actions';

const TrainingTemplatesContent = () => {

  //state variables
  const [isAddTrainingTemplateFormOn, setIsAddTrainingTemplateFormOn] = useState(false);
  const [allTrainingTemplatesData, setallTrainingTemplatesData] = useState<TrainingTemplateType[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllTrainingTemplatesByUserId("123");
      if (res !== undefined) {
        setallTrainingTemplatesData(JSON.parse(JSON.stringify(res)))
      } else {
        setallTrainingTemplatesData(null)
      }
    };

    fetchData();
  }, [])

  const allTrainingTemplatesArr = allTrainingTemplatesData && allTrainingTemplatesData.map((trainingTemplate) => {
    return (
      <Link key={trainingTemplate._id} href={`./trainingTemplates/${trainingTemplate._id}`}>{trainingTemplate.title}</Link>
    )
  })
  
  const toggleTrainingTemplateForm = (bool?: boolean) => {
    if (bool) {
      setIsAddTrainingTemplateFormOn(bool)
    };

    setIsAddTrainingTemplateFormOn(prevState => !prevState);
  }

  return (
    <section className='sectionContainer'>
      <h3 className='sectionHeader'
      >
        <GoChecklist className='text-[#0084ff] text-3xl' />Templates
      </h3>
      <button 
        className='cursor-pointer'
        onClick={() => toggleTrainingTemplateForm()}
      >
       Add new template
      </button>

      {isAddTrainingTemplateFormOn && 
        <TrainingTemplateForm toggleClose={() => setIsAddTrainingTemplateFormOn(false)}/>
      }

      <h3 className='font-semibold uppercase mt-4 mb-2'>All trainings</h3>
      <div className='flex flex-col'>
        {allTrainingTemplatesArr}
      </div>
      

    </section>
  )
}

export default TrainingTemplatesContent