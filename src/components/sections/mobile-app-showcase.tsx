import React from 'react';
import Image from 'next/image';

const MobileAppShowcase = () => {
  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content Side */}
          <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
            <div className="mb-6">
              <span className="text-[12px] font-semibold uppercase tracking-[0.05em] text-black">
                SOLUTIONS
              </span>
            </div>
            
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-[1.1] text-black mb-8">
              Our solution provides clarity and control for our customers.
            </h2>
            
            <p className="text-[18px] md:text-[20px] leading-[1.6] text-[#666666] mb-10 max-w-[540px]">
              With our mobile app, you gain full 24/7 control over your strategy — empowering you to respond to an ever-changing marketing landscape.
            </p>
            
            <a 
              href="https://ee8rd61bc7j.typeform.com/to/LTq0qncw" 
              className="inline-flex items-center justify-center bg-black text-white text-[16px] font-semibold px-10 py-5 rounded-[10px] transition-all duration-300 hover:bg-[#333333] tracking-wider uppercase"
            >
              JOIN THE WAITLIST
            </a>
          </div>

          {/* Right Visual Side */}
          <div className="w-full lg:w-[55%] relative flex justify-center items-center">
            {/* The circular shape behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] opacity-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/64589a75169fc440c6848eb2_circle-18.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile App Mockup */}
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[420px] transform lg:translate-x-10 translate-y-4">
              <div className="relative aspect-[420/850] w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-[#f5f5f5]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/645891b934d354e30453366f_Schedule-17.png"
                  alt="Theone Mobile App Interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative "C" shape element from the screenshots */}
              <div className="absolute top-[10%] -right-12 md:-right-20 w-[80px] md:w-[120px] h-[80px] md:h-[120px] z-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                   <path d="M50 0c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50h-15c0 19.33-15.67 35-35 35s-35-15.67-35-35 15.67-35 35-35v-15z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;