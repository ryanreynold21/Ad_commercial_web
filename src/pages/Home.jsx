import React from 'react'
import Rootlayout from '../layout/Rootlayout'
import HomeNav from '../components/home/HomeNav'
import CarouselCard from '../components/home/CarouselCard'
import P2card from '../components/home/P2card'
import AllCategory from '../components/home/AllCategory'
import P5photoCard from '../components/home/P5photoCard'
import HotCard from '../components/home/HotCard'
import ProductSection from '../components/home/ProductSection'

const Home = () =>
{
  return (
    <Rootlayout>
      <div className=" bg-stone-200">
        <HomeNav />
        <div className=" grid grid-cols-1 lg:grid-cols-5 bg-white">
          <div className=" hidden lg:block">
            <AllCategory />
          </div>
          <div className=" lg:col-span-3">
            <CarouselCard />
          </div>
          <div className=" block lg:hidden">
            <AllCategory />
          </div>
          <div className=" hidden lg:block">
            <P2card />
          </div>
        </div>
        {/* photo */ }
        <P5photoCard />
        {/* Hot */ }
        <div className=" my-20 hidden lg:block  bg-white">
          <h1 className=' text-red-600 text-[30px] px-10 py-6 border border-b-red-600'>HOT</h1>
          <HotCard />
        </div>
        {/* adult Product sectons */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>Adult Product</h1>
          <ProductSection />
        </div>
        {/* skin care sectons */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>Whitening skincare</h1>
          <ProductSection />
        </div>
        {/* ox stinks armpit odor */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>ox stinks armpit odor</h1>
          <ProductSection />
        </div>
        {/* Shampoo and conditioner */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>Shampoo and conditioner</h1>
          <ProductSection />
        </div>
        {/* 祛疤祛斑 */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>祛疤祛斑</h1>
          <ProductSection />
        </div>
        {/* 视力保健 */ }
        <div className=" my-20 bg-white">
          <h1 className=' text-red-600 text-[30px] font-[800] px-10 py-6 border border-b-red-600'>视力保健</h1>
          <ProductSection />
        </div>
      </div>
    </Rootlayout>
  )
}

export default Home
