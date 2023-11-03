"use client";
import React, { useState } from 'react';
import { Contactus } from '.';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import farmhouse2 from 'assets/Website - Update/Farm House, Devaneri/2.jpg';
import karthika2 from 'assets/Website - Update/Karthika, Dindigul/2.jpg';
import Muruganandham1 from 'assets/Website - Update/Muruganandham, Karur/Elevation 01.jpg';
import siva5 from 'assets/Website - Update/Siva, Karur/5.jpg';
import srinivasan from 'assets/Website - Update/Srinivasan, Karanodai/9.jpg';

const GetInTouchBlock = () => {
  const slides = [
    {
      url: farmhouse2,
    },
    {
      url: karthika2,
    },
    {
      url: Muruganandham1,
    },
    {
      url: siva5,
    },
    {
      url: srinivasan,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='md:flex md:flex-row'>
      <div className='hidden md:flex md:basis-1/2 md:mx-auto md:ml-32'>
        <div className='max-w-[900px] h-[600px] w-full m-auto py-16 px-4 relative group '>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          >
            <Image
              src={slides[currentIndex].url}
              alt='Slide Image'
              layout='fill'
              objectFit='cover'
              className='rounded-sm'
            />
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='md:mr-32'>
        <Contactus />
      </div>
    </div>
  );
};

export default GetInTouchBlock;
