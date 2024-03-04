import React from 'react'
import FruitsCard from './FruitsCard'
import { useState } from 'react'
import Divider from './Divider'

const SeasonSpecials = () => {

    const [fruits, setFruits] = useState([
        { id: 7, image: "7", name: "bouquet", price: 999, },
        { id: 8, image: "8", name: "bouquet", price: 1000, },
        { id: 9, image: "9", name: "bouquet", price: 500, }
    ])

    return (
        <section className='w-5/6 mx-auto my-10'>
           
<Divider  title={ 'Special Gift'}/>
            <div className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {
                    fruits.map((fruit) => {
                        return <FruitsCard key={fruit.id} fruit={fruit} />
                    })
                }
            </div>
        </section>
    )
}

export default SeasonSpecials
