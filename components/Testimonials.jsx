'use client'
import React, { useState, useRef } from 'react';

const TestimonialBox = ({ quote, category, author }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
      <div className="testimonial bg-white rounded-lg shadow-lg p-4 h-full border-t-4 border-black text-center">
        <blockquote className="mb-4">
          <p className="text-gray-700">{quote}</p>
        </blockquote>
        <h3 className="text-lg font-bold mb-1">{category}</h3>
        <h4 className="text-gray-600">{author}</h4>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const testimonialContainerRef = useRef(null);

  const handleScrollLeft = () => {
    const container = testimonialContainerRef.current;
    if (container) {
      container.scrollLeft -= container.offsetWidth;
      setScrollPosition(container.scrollLeft);
    }
  };

  const handleScrollRight = () => {
    const container = testimonialContainerRef.current;
    if (container) {
      container.scrollLeft += container.offsetWidth;
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="py-5 pb-md-6 pb-lg-7 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center text-black mb-5">What our clients are saying..</h1>
        <div className="overflow-x-auto" ref={testimonialContainerRef}>
          <div className="flex flex-nowrap -mx-4">
            <TestimonialBox
              quote="Our experience with the HMT Architects team gets a five star rating from us. They have listened to our vision for the renovation and producing tangible plans & oversight to ensure that it was implemented. We are very happy with the results."
              category="Commercial"
              author="Mbit"
            />
            <TestimonialBox
              quote="Our redecorating plans involved removing wallpaper, painting and updating the general feel of our house. HMT architects and her team had full access for several months while we were absent. Great care was taken in moving and protecting the items being worked around. A powder room fix became more troublesome than expected, but HMT architects managed to turn it into an absolute gem."
              category="Residential"
              author="Mrs. Sangeetha"
            />
            <TestimonialBox
              quote="We are so pleased with our beautiful home and the excellence with which it was designed. It is elegant, comfortable, and functional. We think it's just right. We were impressed with your professionalism which exceeded our expectations. You were considerate, perceptive, and patient with excellent communication skills. We appreciate the fine customer service and your impeccable honesty."
              category="Residential"
              author="Mr. Senthil"
            />
            <TestimonialBox
              quote="We could not have asked for a better architecture firm than HMT Architects. They met our every need and did so with unusual knowledge of all the different options and with a smile."
              category="Residential"
              author="Dr. Alwar"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={handleScrollLeft}
          disabled={scrollPosition === 0}
        >
          &lt;
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={handleScrollRight}
          disabled={scrollPosition === testimonialContainerRef.current?.scrollWidth - testimonialContainerRef.current?.offsetWidth}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
