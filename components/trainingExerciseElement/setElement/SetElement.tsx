import Modal from '@/components/ui/confirmModal/Modal';
import { deleteSet } from '@/lib/actions';
import React, { useState } from 'react'
import { BiSolidEdit, BiTrash } from 'react-icons/bi';

const SetElement = ({
  reps, 
  weight,
  toggleSetForm,
  exerciseId,
  setId,
} : {
  reps: number;
  weight: number;
  toggleSetForm: () => void;
  exerciseId: string;
  setId: string;
}) => {

  // using modal
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const toggleModal = (bool: boolean, title: string) => {
    setModalTitle(title);
    setIsModalOn(bool);
  }

  return (
    <div className='grid grid-cols-3 mt-2 text-3xl font-semibold'>
      <p className='text-[#F4631E]'>{reps}</p>
      <p className='text-[#309898]'>{weight}</p>
      <div className='flex flex-row justify-around'>
        <BiSolidEdit  onClick={() => toggleSetForm()} />
        <BiTrash onClick={() => toggleModal(true, "Do you want to delete this set?")} />
      </div>

      {isModalOn && <Modal 
        title={modalTitle} 
        handleFunc={() => deleteSet(exerciseId, setId)}
        closeFunc={() => setIsModalOn(false)}
      />}
    </div>
  )
}

export default SetElement