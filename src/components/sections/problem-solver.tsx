thought
import React from 'react';
import Image from 'next/image';

const ProblemSolver = () => {
  return (
    <section className="choose-us-section bg-white py-[100px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[60px] max-w-[840px] mx-auto">
          <div className="choose-us-mini-title-wrap mb-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-black">
              How Is
            </span>
          </div>
          <div className="choose-us-heading-wrap mb-5">
            <h2 className="text-[36px] md:text-[42px] font-bold leading-[1.2] text-black tracking-[-0.02em]">
              Theone solving today&apos;s biggest marketing issues
            </h2>
          </div>
          <div className="choose-us-details-wrap">
            <p className="text-[18px] text-[#666666] leading-[1.6]">
              Rising above the content crowd in today&apos;s digital era can be a tough task for business owners - we help build a cohesive and consistent content strategy for your business which covers all aspects of content creation and distribution, incorporating various channels and formats to achieve your specific goals.
            </p>
          </div>
        </div>

        {/* Diagram and Info Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mt-12">
          
          {/* Left Side: Mockups */}
          <div className="relative w-full lg:w-1/3 flex items-center justify-center lg:justify-start">
            <div className="relative flex items-center space-x-[-80px]">
              <div className="relative z-10 drop-shadow-2xl">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/64588ff89dcb2443c8809981_Instagram_20Template-13.png" 
                  alt="Instagram Mockup"
                  className="w-[200px] md:w-[240px] rounded-[24px] border border-[#e2e2e2] bg-white"
                />
              </div>
              <div className="relative z-0 opacity-60 transform translate-x-8 translate-y-8">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/643fc531e1ca1a396b3278dc_LinkedIn_20Template-14.png" 
                  alt="LinkedIn Mockup"
                  className="w-[200px] md:w-[240px] rounded-[24px] border border-[#e2e2e2] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Center: Orbital Graphic */}
          <div className="relative w-full lg:w-1/3 flex items-center justify-center">
            <div className="orbital-container relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Central Core */}
              <div className="relative z-20 w-[100px] h-[100px] bg-white rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center justify-center border border-[#e2e2e2]">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/icons/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd-2.png" 
                  alt="Theone Logo"
                  className="w-12 h-12"
                />
              </div>

              {/* Orbital Circles */}
              <div className="absolute w-[180px] h-[180px] border border-[#f0f0f0] rounded-full"></div>
              <div className="absolute w-[260px] h-[260px] border border-[#f5f5f5] rounded-full"></div>
              
              {/* Dynamic Connection Lines (Representative SVG) */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 300 300">
                <g fill="none" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" opacity="0.3">
                  {/* Lines to left (Mockups) */}
                  <path d="M100 150 L50 120" />
                  <path d="M100 150 L50 150" />
                  <path d="M100 150 L50 180" />
                  
                  {/* Lines to right (Labels) */}
                  <path d="M200 150 L250 100" />
                  <path d="M200 150 L250 150" />
                  <path d="M200 150 L250 200" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side: Text Labels */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-12 lg:pl-12">
            <div className="choose-us-single-info-wrapper">
              <h3 className="text-[20px] font-bold text-black mb-1">AI</h3>
              <p className="text-[16px] text-[#666666]">Automate management processes</p>
            </div>
            
            <div className="choose-us-single-info-wrapper">
              <h3 className="text-[20px] font-bold text-black mb-1">Sharing Economy</h3>
              <p className="text-[16px] text-[#666666]">Execute strategy</p>
            </div>
            
            <div className="choose-us-single-info-wrapper">
              <h3 className="text-[20px] font-bold text-black mb-1">Processes</h3>
              <p className="text-[16px] text-[#666666]">Ensures quality control</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolver;