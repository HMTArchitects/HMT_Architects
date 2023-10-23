'use client'
import React, { useState, useRef, useEffect } from 'react';

const testimonialsData = [
  {
    quote: "Our experience with the HMT Architects team gets a five star rating from us. They have listened to our vision for the renovation and producing tangible plans & oversight to ensure that it was implemented. We are very happy with the results.",
    category: "Commercial",
    author: "Mbit"
  },
  {
    quote: "Our redecorating plans involved removing wallpaper, painting and updating the general feel of our house. HMT architects and her team had full access for several months while we were absent. Great care was taken in moving and protecting the items being worked around. A powder room fix became more troublesome than expected, but HMT architects managed to turn it into an absolute gem.",
    category: "Residential",
    author: "Mrs. Sangeetha"
  },
  {
    quote: "We are so pleased with our beautiful home and the excellence with which it was designed. It is elegant, comfortable, and functional. We think it's just right. We were impressed with your professionalism which exceeded our expectations. You were considerate, perceptive, and patient with excellent communication skills. We appreciate the fine customer service and your impeccable honesty.",
    category: "Residential",
    author: "Mr. Senthil"
  },
  {
    quote: "We could not have asked for a better architecture firm than HMT Architects. They met our every need and did so with unusual knowledge of all the different options and with a smile.",
    category: "Residential",
    author: "Dr. Alwar"
  }
];

const TestimonialBox = ({ quote, category, author }) => {
  return (
    <div className={`w-full md:w-1/4 lg:w-1/3 p-2 mb-4 relative mt-2 md:mt-[3rem] ml-4 md:ml-[4rem] mr-4 md:mr-[3rem]`}>
      <div className="bg-white rounded-lg shadow-xl p-3 h-full w-full border-t-4 border-black text-center text-gray-700 -z-10">
        <blockquote className="mb-2 md:mb-4 p-2 md:p-9">
          <p className="text-gray-700 italic font-serif text-base sm:text-lg">{quote}</p>
        </blockquote>
        <p className="font-extrabold mb-1 text-sm sm:text-lg">{category}</p>
        <p className="text-gray-600 italic font-serif text-sm sm:text-lg">{author}</p>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 md:-mt-10 z-10">
        <div className="sm:w-[5rem] sm:h-[5rem] w-[3.5rem] h-[3.5rem] mt-[0.5rem] bg-white rounded-full flex items-center justify-center shadow-xl sm:mt-4 z-10">
          <span className="sm:text-[6rem] text-bold text-6xl p-auto pt-3 md:p-8 mt-[1rem] md:mt-10 font-extrabold font-serif">”</span>
        </div>
      </div>
    </div>
  );
};




const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
  };

  const handleScrollRight = () => {
    setCurrentIndex((currentIndex + 1) % testimonialsData.length);
  };

  // Automatically advance the testimonial every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
  ];

  return (
    <div className="py-5 pb-md-6 pb-lg-7 bg-white mt-[8rem] -z-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-black mb-6 font-se">WHAT OUR CLIENTS ARE SAYING..</h1>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-wrap -mx-2 justify-center">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialBox
                key={index}
                quote={testimonial.quote}
                category={testimonial.category}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleScrollLeft}
        >
          &lt;
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleScrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
