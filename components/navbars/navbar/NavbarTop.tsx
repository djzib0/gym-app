'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarTop = () => {

  const pathName = usePathname();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
  <Link href="/" className="text-xl font-bold text-gray-800">MyApp</Link>
  <nav className="space-x-4">
    <Link 
      href="/trainings"
      className={`text-gray-600 p-2 rounded-sm hover:text-black ${pathName.startsWith('/trainings') && 'bg-[#3b7cba] text-white'}`}
    >
      Trainings
    </Link>
    <Link 
      href="/exercises"
      className={`text-gray-600 p-2 rounded-sm hover:text-black ${pathName.startsWith('/exercises') && 'bg-[#3b7cba] text-white'}`}
    >
      Exercises
    </Link>
    <a href="#" className="text-gray-600 hover:text-black">About</a>
    <a href="#" className="text-gray-600 hover:text-black">Contact</a>
  </nav>
  </header>
  )
}

export default NavbarTop