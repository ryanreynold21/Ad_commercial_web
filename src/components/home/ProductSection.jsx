import React from 'react'

const ProductSection = () =>
{
    const data = [
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/1/2019/04/03/5ca4137da5b80.jpg',
        },
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/1/2019/04/08/5cab09ccc8e36.jpg',
        },
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/11/20/5dd4e61b6db4c.jpg',
        },
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/2/2019/11/29/5de0bb120d728.jpg',
        },
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/0/2019/04/04/5ca59dbe12fae.png',
        },
        {
            name: '莱薇尔腋香净爽液',
            title: 'LAVER莱薇尔去狐臭喷雾祛腋臭净味',
            price: '¥ 499',
            photo: 'https://www.ftxk.cn/Uploads/Picture/single/1/2019/06/26/5d13262c0becd.jpg',
        },
    ]
    return (
        <div>
            <div className=" grid grid-cols-5 gap-5">
                {/* Hot Selling */ }
                <div className=" my-10 flex flex-col gap-10">
                    <div className="relative overflow-hidden p-2 text-center z-[3] text-green-800 text-[20px] border border-dashed border-green-800">
                        <span className='absolute top-0 left-0 rotate-[-50deg] translate-y-2 -translate-x-5 bg-red-600 text-white w-[100px]'>hot</span>
                        <span className="relative">Hot Selling Leaderboard</span>
                    </div>
                    <ul className=' flex flex-col gap-10'>
                        { data.map( ( card, index ) => (
                            <li className=' flex gap-6 px-5 cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-200' key={ index }>
                                <img src={ card.photo } className=' w-[80px] h-[80px] object-cover object-center' alt="" />
                                <div className="">
                                    <h1 className=' text-black text-[20px]'>{ card.name }</h1>
                                    <p className=' text-red-600 text-[20px] font-[600]'>{ card.price }</p>
                                </div>
                            </li>
                        ) ) }
                    </ul>
                </div>
                {/* product */ }
                <div className=" my-10 col-span-3">
                    <div className=" grid grid-cols-2 gap-20">
                        { data.map( ( card, index ) => (
                            <div className=" flex justify-center items-center gap-5 cursor-pointer hover:translate-x-4 hover:shadow-xl transition-all duration-200">
                                <img src={ card.photo } className=' w-[200px] h-[200px] object-cover object-center' alt="" />
                                <div className=" flex flex-col gap-10">
                                    <h1 className=' text-[20px] text-black'>{ card.name }</h1>
                                    <p className=' text-[18px] text-stone-700'>{ card.title }</p>
                                    <p className=' text-[20px] text-red-600 font-[600]'>{ card.price }</p>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
                {/* 2photo */ }
                <div className=" my-10">
                    <div className=" grid grid-rows-2">
                        <div className=" w-full">
                            <img className=' w-[350px] h-[350px] object-cover object-center' src="https://www.ftxk.cn/Uploads/Picture/single/2/2019/06/26/5d132faedb690.jpg" alt="" />
                            <h1 className=' text-[20px] font-[500] text-center text-black'>Selebritee open crotch sex stockings</h1>
                        </div>
                        <div className=" w-full">
                            <img className=' w-[350px] h-[350px] object-cover object-center' src="https://www.ftxk.cn/Uploads/Picture/single/2/2019/12/11/5df0528791227.jpg" alt="" />
                            <h1 className=' text-[20px] font-[500] text-center text-black'>Selebritee open crotch sex stockings</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection
