import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";


const AddButton = () => {
  const [addcart, setAddcart] = useState(false)

  const handleClick = () => {
    console.log("REMOVE ITEM")
  }

  const handleClick2 = () => {
    console.log("ADD ITEM")
  }

  return (
    <>
      <div className='flex justify-between items-center font-body border mr-11 border-pink-700 bg-white  w-11/12 mb-5 h-10 rounded-md  md:my-0 m-1 cursor-pointer '>
        <div>
          <FaMinus className='border  h-full w-10 px-3' role='button' onClick={handleClick} />
        </div>
        <div className=' md:text-xm'>
          Add Item
        </div>
        <div>
          <FaPlus className=' border h-full w-10 px-3' role='button' onClick={handleClick2} />
        </div>
      </div>

    </>
  )
}

export default AddButton
