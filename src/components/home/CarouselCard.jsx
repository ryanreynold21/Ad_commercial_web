import React from 'react'

const CarouselCard = () =>
{
  return (
    <>
    <div className=" relative flex justify-center items-center">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://images.pexels.com/photos/6347545/pexels-photo-6347545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-[700px] object-cover object-center" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-[700px] object-center object-cover" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-[700px] object-center object-cover" />
        </div>
      </div>
      <div className="flex justify-center items-center py-2 gap-10 absolute bottom-10 w-[300px]">
        <a href="#item1" className=" bg-red-600 p-4 rounded-full text-white">
          <p className=' w-2 h-2 bg-white rounded-full'></p>
        </a>
        <a href="#item2" className=" bg-red-600 p-4 rounded-full text-white">
          <p className=' w-2 h-2 bg-white rounded-full'></p>
        </a>
        <a href="#item3" className=" bg-red-600 p-4 rounded-full text-white">
          <p className=' w-2 h-2 bg-white rounded-full'></p>
        </a>
      </div>
    </div>
    </>
  )
}

export default CarouselCard
