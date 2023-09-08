import React from 'react'

const AllCategory = () => {
    const data = [
        {
            name : 'Adult Product',
            description : 'Time delay spray, orgasm lubricant, condoms, erotic underwear'
        },
        {
            name : 'Whitening skincare',
            description : 'Hair removal hand cream, sun protection and whitening'
        },
        {
            name : 'Fox stinks armpit odor',
            description : 'Antiperspirant Hydrator Odor Powder Purifying Water'
        },
        {
            name : 'Shampoo and conditioner',
            description : 'Anti-hair loss shampoo to dye black hair'
        },
        {
            name : 'Body care',
            description : 'Nail fungus foot patches'
        },
        {
            name : 'Perfume lipstick',
            description : 'Perfume lipstick'
        },
    ]
  return (
    <div>
        <ul className=' flex flex-col gap-5'>
            {data.map((card,index) => (
                <li key={index} className=' flex flex-col px-4 py-2 hover:border cursor-pointer hover:border-green-500 transition-all duration-100'>
                    <h1 className=' text-[25px] text-black'>{card.name}</h1>
                    <p className=' text-[15px] text-stone-600'>{card.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AllCategory
