import React from 'react'

const HomeNav = () =>
{
    return (
        <div>
            <div className="navbar bg-[#28BB77] text-white">
                <div className="navbar-start">
                    <a className=" text-[30px]">All Product categories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-[25px] menu-horizontal px-1">
                        <li className='px-4 py-2'><a className=''>News</a></li>
                        <li className='px-4 py-2'><a className=''>Q & A</a></li>
                        <li className='px-4 py-2'><a className=''>Healthy</a></li>
                        <li className='px-4 py-2'><a className=''>Medical</a></li>
                        <li className='px-4 py-2'><a className=''>Brands</a></li>
                        <li className='px-4 py-2'><a className=''>Information</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeNav
