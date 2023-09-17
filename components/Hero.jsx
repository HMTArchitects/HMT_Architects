'use client'
import React from 'react'
import Image from 'next/image'
import Typed from 'react-typed';
import home2 from '../assets/pngegg2.png'
const Hero = () => {
  return (
    <div className='bg-white'>
      <div className='lg:m-22 md:pl-14 m-8 flex flex-row pb-16'>
        <div className='flex lg:basis-1/2 md:basis-2/3 '>
          <div >
          <h1 className='lg:text-7xl text-6xl  font-bold pl-8 pb-4 pt-8 md:pt-20'>WE DESIGN</h1>
          <Typed className='text-black lg:text-7xl  text-6xl font-bold pl-8 ' strings={['HOMES','OFFICES','INTERIOR']} typeSpeed={180} backSpeed={180} loop />
          
          <p className='p-8 mr-4'>HMT Architects, is a visionary design firm with extensive experience in Architecture, Interior, and Infrastructure. Our team has proven our excellence as one of Chennai's top architectural firms. Our success stems from a process-driven approach and unwavering commitment to fulfilling our clients' desires.</p>
          <button className='bg-[#0e3548] ml-8 p-3 text-white rounded-md font-semibold'>
            Explore
          </button>
          </div>
        </div>
        <div className='hidden md:flex  md:pt-20 lg:items-center lg:pt-0'>
          
          <Image src={home2} width={800} height={800} alt='hmt' />


        </div>
      </div>
    </div>
  )
}

export default Hero
