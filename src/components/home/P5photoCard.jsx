import React from 'react'

const P5photoCard = () => {
    const data = [
        {
            photo : 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/07/30/5d4005428dcc4.jpg',
        },
        {
            photo : 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/06/28/5d15aa3494402.jpg',
        },
        {
            photo : 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/06/28/5d15a681e3b1e.jpg',
        },
        {
            photo : 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/06/28/5d158981b9717.jpg',
        },
        {
            photo : 'https://www.ftxk.cn/Uploads/Picture/single/0/2019/06/10/5cfe0af747574.png',
        },
    ]
  return (
    <div>
      <div className=" grid grid-cols-5 my-10">
        {data.map((card,index) => (
            <img key={index} src={card.photo} className=' w-[400px] h-[400px] object-cover object-center' alt="" />
        ))}
      </div>
    </div>
  )
}

export default P5photoCard
