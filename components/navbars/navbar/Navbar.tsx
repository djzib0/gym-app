import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row mb-4'>
      <Link href={"/trainings"}>Training templates</Link>
    </nav>
  )
}

export default Navbar