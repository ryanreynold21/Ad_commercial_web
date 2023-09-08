import React, { useState } from 'react'
import Rootlayout from '../layout/Rootlayout'
import DetailsPhoto from '../components/details/DetailsPhoto'
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi'
import P3card from '../components/details/P3card'

const Details = () =>
{
  const [ qty, setQty ] = useState( 1 )

  return (
    <Rootlayout>
      <div className="">
        <div className=" grid grid-cols-7 gap-5">
          {/* photo */ }
          <div className=" col-span-2">
            <DetailsPhoto />
          </div>
          {/* product details */ }
          <div className=" col-span-4">
            <div className=" flex flex-col gap-12 py-10">
              <h1 className=' text-[30px] tracking-wider text-black font-[500]'>Panther time-lapse spray four generations</h1>
              <p className=' text-[20px] text-black'>Panther spray external use delay wipes four generations delay Japanese men's spray long lasting no shot Indian God oil spray</p>
              <div className=" bg-gray-200 p-10 flex justify-center items-center gap-10">
                <span className=' text-[20px] font-[600] text-black'>Member Price</span>
                <h1 className=' text-[40px] text-red-700 font-[600]'>¥499</h1>
              </div>
              <button className=' px-4 py-2 text-green-700 font-[600] text-[25px]'>View All Product</button>
              {/* cart */ }
              <div className=" flex gap-10">
                <h1 className=' text-[40px] text-black font-[500]'>{ qty }</h1>
                <div className=" flex flex-col gap-2">
                  <BiUpArrowAlt className=' text-[30px] cursor-pointer border border-black' />
                  <BiDownArrowAlt className=' text-[30px] cursor-pointer border border-black' />
                </div>
                <button className=' text-2xl px-6 py-2 bg-red-600 text-white'>Add to Cart</button>
                <button className=' text-2xl px-6 py-2 bg-blue-600 text-white'>Buy Now</button>
              </div>
              <p className=' text-stone-800 text-[20px]'>Black Panther Time Delay Spray IV is an upgraded version based on previous generations, with better delay and long-lasting effect, no numbness, and a happier feeling!</p>
            </div>
          </div>
          <div className="">
            <P3card />
          </div>
        </div>
      </div>
    </Rootlayout>
  )
}

export default Details
