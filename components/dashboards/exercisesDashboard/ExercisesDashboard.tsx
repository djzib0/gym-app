'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const ExercisesDashboard = () => {

  const pathName = usePathname();
    
  return (
    <menu className='flex flex-row gap-4 bg-white top-16 h-12 items-center justify-evenly shadow-md border-t border-t-[#e1e1e1]'>
      <Link 
        href={"/exercises"}
        className={`font-semibold text-[#6b6b6b] p-2 rounded-sm tracking-wider 
          uppercase ${pathName === '/exercises' && 'bg-[#3b7cba] text-white'}`}
        >
        Exercises
      </Link>
      <Link 
        href={"/exercises/exercisesTemplates"}
        className={`font-semibold text-[#6b6b6b] p-2 rounded-sm tracking-wider 
          uppercase ${pathName === '/exercises/exercisesTemplates' && 'bg-[#3b7cba] text-white'}`}
      >
        Templates
      </Link>
        
    </menu>
  )
}

export default ExercisesDashboard