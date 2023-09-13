'use client'
import React from 'react'
import { data } from '../constants/gallery_img';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const Gallerycarousel = () => {
  const LeftIcon = () => <MdChevronLeft size={40} />;
const RightIcon = () => <MdChevronRight size={40} />;
  // Inside your component
const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};

return (
  <div>
    <div className='text-white ml-12'>
      <h1 className='text-4xl'>Our Designs</h1>
    </div>
    <div className='relative flex items-center'>
      <div
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideLeft}
      >
        <LeftIcon />
      </div>
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {data.map((item) => (
          <Image
            className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src= {item.img}
            width={380}
            height={100}
            alt='/'
          />
        ))}
      </div>
      <div
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideRight}
      >
        <RightIcon />
      </div>
    </div>
  </div>
);

}
export default Gallerycarousel
