'use client'
import React from 'react';
import Image from 'next/image';
import logo1 from 'assets/icons/calendar.png'
import logo2 from 'assets/icons/design.png'
import logo3 from 'assets/icons/happy.png'
import logo4 from 'assets/icons/security.png'

const Whyhmt = () => {


  return (
      <div className="why-hmt py-5 pb-10 pb-md-6 pb-lg-7 bg-white">
        <section className="container animate mx-auto px-4 items-center">
          <div className="all-partners pb-5 text-4xl font-semibold text-center text-black mb-5">Why HMT Architects?</div>
          <div className="icons overflow-x-auto flex flex-wrap gap-20 items-center justify-center -mx-10 ">
            <div className="pr-9 md:shrink-0">
              <Image src={logo1} className='w-40 h-50 sm:w-40 sm:h-50'/>
              <h2 className='text-lg font-bold text-center text-black mb-5'>Timely delivery</h2>
            </div>
            <div className="pr-9 md:shrink-0">
              <Image src={logo2} className='w-40 h-50 sm:w-40 sm:h-50'/>
              <h2 className='text-lg font-bold text-center text-black mb-5'>Design Experts</h2>
            </div>
            <div className="pr-9 md:shrink-0">
              <Image src={logo3} className='w-40 h-50 sm:w-40 sm:h-50'/>
              <h2 className='text-lg font-bold text-center text-black mb-5'>Happy Customers</h2>
            </div>
            <div className="pr-9 md:shrink-0">
              <Image src={logo4} className='w-40 h-50 sm:w-40 sm:h-50'/>
              <h2 className='text-lg font-bold text-center text-black mb-5'>Security</h2>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Whyhmt;
