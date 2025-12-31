import React from 'react';
import Image from 'next/image';

/**
 * ClarityControlSection Component
 * 
 * Clones the "Our solution provides clarity and control" section
 * featuring a mobile app screenshot and a circular progress-style graphic.
 * 
 * Assets used:
 * - Mobile app screenshot: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/645891b934d354e30453366f_Schedule-17.png
 * - Circular graphic: https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/64589a75169fc440c6848eb2_circle-18.png
 */

const ClarityControlSection: React.FC = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-[14px] font-semibold uppercase tracking-[0.1em] text-foreground">
                SOLUTIONS
              </span>
            </div>
            
            <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-black mb-6 max-w-[500px]">
              Our solution provides clarity and control for our customers.
            </h2>
            
            <p className="text-[20px] text-[#545454] leading-[1.6] mb-10 max-w-[540px]">
              With our mobile app, you gain full 24/7 control over your strategy — empowering you to respond to an ever-changing marketing landscape.
            </p>
            
            <div className="flex">
              <a 
                href="https://ee8rd61bc7j.typeform.com/to/LTq0qncw"
                className="bg-black text-white px-[34px] py-[16px] rounded-[10px] text-[18px] font-semibold uppercase tracking-[0.05em] transition-transform hover:scale-105 active:scale-95 text-center flex items-center justify-center min-w-[230px]"
              >
                JOIN THE WAITLIST
              </a>
            </div>
          </div>

          {/* Right Visual Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Mobile App Screenshot Frame */}
              <div className="relative z-10 w-[280px] sm:w-[320px] md:w-[360px] transform translate-x-[-20px] md:translate-x-[-40px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/645891b934d354e30453366f_Schedule-17.png"
                  alt="Theone Mobile App Interface"
                  width={360}
                  height={740}
                  className="rounded-[32px] shadow-2xl"
                  priority
                />
              </div>

              {/* Circular Decorative Graphic */}
              <div className="absolute top-1/2 left-[70%] sm:left-[65%] -translate-y-1/2 z-0 w-[160px] sm:w-[220px] md:w-[260px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/64589a75169fc440c6848eb2_circle-18.png"
                  alt="Graphic Element"
                  width={260}
                  height={260}
                  className="opacity-100 object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClarityControlSection;