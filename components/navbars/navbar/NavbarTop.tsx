import Link from 'next/link'
import React from 'react'

const NavbarTop = () => {
  return (
    <nav className='fixed top-0 flex flex-row mb-4 h-16 bg-red-50'>
      <Link href={"/trainings"}>Training templates</Link>
    </nav>
  )
}

export default NavbarTop