import React, { useState } from 'react'

const Filters = () => {

    const [selectedItem, setSelectedItem] = useState(1)
  return (
   <section className='my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row  justify-around'>
    <button onClick={()=> setSelectedItem(1)} className={`btnStyle ${selectedItem === 1 ? "bg-pink-400 text-white" : "text-black"}`}>Latest</button>
    <button onClick={()=> setSelectedItem(2)} className={`btnStyle ${selectedItem === 2 ? "bg-pink-400 text-white" : "text-black"}`}>Best Seller</button>
    <button onClick={()=> setSelectedItem(3)} className={`btnStyle ${selectedItem === 3 ? "bg-pink-400 text-white" : "text-black"}`}>Special</button>
   </section>
  )
}
 
export default Filters