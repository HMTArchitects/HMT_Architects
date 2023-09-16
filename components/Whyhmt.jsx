'use client'
import React from 'react';


const Whyhmt = () => {


  return (
      <div className="why-hmt py-5 pb-10 pb-md-6 pb-lg-7 bg-gray-100">
        <section className="container animate mx-auto px-4 items-center">
          <div className="all-partners text-4xl font-serif text-center text-black mb-5">Why HMT Architects?</div>
          <div className="icons overflow-x-auto flex flex-nowrap gap-20 items-center justify-center mx-10">
            <div className="pr-9">
              <img src="https://super.homelane.com/RTB/installation_days.svg" className="w-40 h-50" />
            </div>
            <div className="pr-9">
              <img src="https://super.homelane.com/RTB/homes_completed.svg" className="w-40 h-50" />
            </div>
            <div className="pr-9">
              <img src="https://super.homelane.com/RTB/design_experts.svg" className="w-40 h-50" />
            </div>
            <div className="pr-9">
              <img src="https://super.homelane.com/RTB/material_warranty.svg" className="w-40 h-50" />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Whyhmt;
