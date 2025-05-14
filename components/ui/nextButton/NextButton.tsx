import React from 'react';
import { RiArrowRightDoubleFill } from 'react-icons/ri';

const NextButton = ({handleFunc}: {handleFunc?: () => void}) => {
  return (
    <button
      className="flex items-center justify-center gap-2 px-4 py-2 w-40 bg-green-600 hover:bg-green-700 text-white font-semibold uppercase rounded-md transition-colors duration-200"
      type='button'
      onClick={handleFunc ? handleFunc : () => {}}
    > 
      Next <RiArrowRightDoubleFill />
    </button>
  )
}

export default NextButton