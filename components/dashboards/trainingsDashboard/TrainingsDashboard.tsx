'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const TrainingsDashboard = () => {

  const pathName = usePathname();

  return (
    <menu className='flex flex-row gap-4 bg-white top-16 h-12 items-center justify-evenly shadow-md border-t border-t-[#e1e1e1]'>
      <Link 
        href={"/trainings"}
        className={`font-semibold text-[#6b6b6b] p-2 rounded-sm tracking-wider 
          uppercase ${pathName === '/trainings' && 'bg-[#3b7cba] text-white'}`}
        >
        Trainings
      </Link>
      <Link 
        href={"/trainings/trainingTemplates"}
        className={`font-semibold text-[#6b6b6b] p-2 rounded-sm tracking-wider 
          uppercase ${pathName === '/trainings/trainingTemplates' && 'bg-[#3b7cba] text-white'}`}
      >
        Templates
      </Link>
        
    </menu>
  )
}

export default TrainingsDashboard