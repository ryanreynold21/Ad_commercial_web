import React from 'react'
import {SlHandbag} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cart = 0;

    return (
        <div className=' z-[999] bg-white w-full shadow-xl'>
            <div className=" bg-white grid grid-cols-3 lg:grid-cols-2 justify-center items-center">
                {/* logo */ }
                <div className=" lg:mx-10">
                    <Link to={ '/' }>
                        <svg className=' w-[100px] lg:w-[200px] h-[90px] lg:h-[180px]' viewBox="0 0 333 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M122 99.8039C143.406 93.3657 159 73.5039 159 50C159 26.4961 143.406 6.63437 122 0.196167V99.8039Z" fill="url(#paint0_linear_3_50)" />
                            <path d="M153.089 0H160C186.448 0 208.1 20.5347 209.881 46.5303C207.632 46.84 205.335 47 203 47C176.393 47 154.64 26.2175 153.089 0Z" fill="url(#paint1_linear_3_50)" />
                            <path d="M209.881 53.4697C208.1 79.4653 186.448 100 160 100H153.089C154.64 73.7825 176.393 53 203 53C205.335 53 207.632 53.16 209.881 53.4697Z" fill="url(#paint2_linear_3_50)" />
                            <path d="M20.855 141.16C23.927 141.16 26.7089 141.553 29.2006 142.338C31.7265 143.089 33.8769 144.215 35.6518 145.717C37.4609 147.219 38.8603 149.096 39.8502 151.349C40.8401 153.567 41.335 156.145 41.335 159.08C41.335 162.015 40.8401 164.61 39.8502 166.862C38.8603 169.081 37.4609 170.941 35.6518 172.443C33.8769 173.945 31.7265 175.089 29.2006 175.874C26.7089 176.625 23.927 177 20.855 177H3.95899V141.16H20.855ZM11.383 145V173.16H20.855C22.5958 173.16 24.2171 172.904 25.719 172.392C27.255 171.846 28.5862 171.01 29.7126 169.883C30.839 168.723 31.7265 167.255 32.375 165.48C33.0577 163.705 33.399 161.572 33.399 159.08C33.399 156.588 33.0577 154.455 32.375 152.68C31.7265 150.905 30.839 149.454 29.7126 148.328C28.5862 147.167 27.255 146.331 25.719 145.819C24.2171 145.273 22.5958 145 20.855 145H11.383ZM54.383 145V156.776H73.071V160.616H54.383V173.16H78.191V177H46.959V141.16H78.191V145H54.383ZM100.717 172.648H101.229L114.08 141.16H121.709L107.117 177H94.829L80.237 141.16H87.8658L100.717 172.648ZM133.233 145V156.776H151.921V160.616H133.233V173.16H157.041V177H125.809V141.16H157.041V145H133.233ZM191.599 173.16V177H162.159V141.16H169.583V173.16H191.599ZM212.065 143.72C210.324 143.72 208.686 144.027 207.15 144.642C205.648 145.256 204.334 146.195 203.207 147.458C202.081 148.721 201.176 150.325 200.494 152.27C199.845 154.182 199.521 156.452 199.521 159.08C199.521 161.708 199.845 163.995 200.494 165.941C201.176 167.852 202.081 169.439 203.207 170.702C204.334 171.965 205.648 172.904 207.15 173.518C208.686 174.133 210.324 174.44 212.065 174.44C213.806 174.44 215.427 174.133 216.929 173.518C218.465 172.904 219.796 171.965 220.923 170.702C222.049 169.439 222.936 167.852 223.585 165.941C224.268 163.995 224.609 161.708 224.609 159.08C224.609 156.452 224.268 154.182 223.585 152.27C222.936 150.325 222.049 148.721 220.923 147.458C219.796 146.195 218.465 145.256 216.929 144.642C215.427 144.027 213.806 143.72 212.065 143.72ZM212.065 140.136C215.137 140.136 217.919 140.546 220.411 141.365C222.936 142.184 225.087 143.396 226.862 145C228.671 146.604 230.07 148.584 231.06 150.939C232.05 153.294 232.545 156.008 232.545 159.08C232.545 162.152 232.05 164.866 231.06 167.221C230.07 169.576 228.671 171.556 226.862 173.16C225.087 174.764 222.936 175.976 220.411 176.795C217.919 177.614 215.137 178.024 212.065 178.024C208.993 178.024 206.194 177.614 203.668 176.795C201.142 175.976 198.975 174.764 197.166 173.16C195.391 171.556 194.008 169.576 193.019 167.221C192.063 164.866 191.585 162.152 191.585 159.08C191.585 156.008 192.063 153.294 193.019 150.939C194.008 148.584 195.391 146.604 197.166 145C198.975 143.396 201.142 142.184 203.668 141.365C206.194 140.546 208.993 140.136 212.065 140.136ZM257.141 141.16C259.701 141.16 261.988 141.45 264.002 142.03C266.05 142.577 267.774 143.396 269.173 144.488C270.572 145.546 271.648 146.86 272.399 148.43C273.15 149.966 273.525 151.724 273.525 153.704C273.525 155.684 273.15 157.459 272.399 159.029C271.648 160.565 270.572 161.879 269.173 162.971C267.774 164.029 266.05 164.849 264.002 165.429C261.988 165.975 259.701 166.248 257.141 166.248H246.133V177H238.709V141.16H257.141ZM246.133 145V162.408H257.141C259.838 162.408 261.92 161.708 263.387 160.309C264.889 158.875 265.64 156.674 265.64 153.704C265.64 150.734 264.889 148.55 263.387 147.15C261.92 145.717 259.838 145 257.141 145H246.133ZM317.385 158.619L332.643 177H323.939L313.033 163.893L302.179 177H293.475L308.681 158.619L294.243 141.16H302.947L313.033 153.397L323.171 141.16H331.875L317.385 158.619Z" fill="#1C1C2B" />
                            <defs>
                                <linearGradient id="paint0_linear_3_50" x1="152" y1="85.5" x2="100" y2="-62.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#C394FF" />
                                    <stop offset="1" stop-color="#524EFD" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_3_50" x1="181.485" y1="0" x2="181.485" y2="47" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D5B4FF" />
                                    <stop offset="1" stop-color="#674EFD" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_3_50" x1="181.485" y1="53" x2="142.5" y2="100" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC88FF" />
                                    <stop offset="1" stop-color="#524EFD" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>
                {/* search and cart */ }
                <div className=" col-span-2 lg:col-span-1 flex gap-4 lg:gap-10 items-center justify-center">
                    <form className=' w-2/3'>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative flex justify-center items-center border-2 border-[#209F64]">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="lg:w-10 w-6 h-6 lg:h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-3 lg:p-5 pl-10 lg:pl-20 text-[10px] lg:text-[20px] text-black bg-gray-50 " placeholder="What are you looking for?" required />
                            <button type="submit" class=" hidden lg:block text-white absolute right-0 bg-[#209F64] hover:bg-[#28BB77] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-[25px] px-10 py-3 h-full dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <div className="">
                        <button className=' flex items-center gap-2 lg:gap-6 text-[23px] lg:px-6 px-3 lg:py-3 py-1 bg-stone-200'>
                            <SlHandbag className=' text-red-700' />
                            <span className=' hidden lg:block text-black'>My Cart</span>
                            <span className=' text-red-700'> ({cart})</span>
                        </button>
                    </div>
                </div>
                {/* cart */ }
            </div>
        </div>
    )
}

export default Navbar
