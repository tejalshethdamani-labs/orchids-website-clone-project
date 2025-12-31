"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * SolutionProcess component
 * Clones the "How Is Theone solving today's biggest marketing issues" section
 * with nodes, central heart icon, and mobile UI mockups.
 */
const SolutionProcess = () => {
  const items = [
    { title: "AI", detail: "Automate management processes" },
    { title: "Sharing Economy", detail: "Execute strategy" },
    { title: "Processes", detail: "Ensures quality control" }
  ];

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Top Header Content */}
        <div className="flex flex-col items-center text-center mb-20 max-w-[800px] mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] font-semibold uppercase tracking-[0.1em] text-black mb-4"
          >
            How Is
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] font-semibold leading-[1.2] text-black mb-8"
          >
            Theone solving today&apos;s biggest marketing issues
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] leading-[1.6] text-[#545454]"
          >
            Rising above the content crowd in today&apos;s digital era can be a tough task for business owners - we help build a cohesive and consistent content strategy for your business which covers all aspects of content creation and distribution, incorporating various channels and formats to achieve your specific goals.
          </motion.p>
        </div>

        {/* Visual Diagram Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 min-h-[500px]">
          
          {/* Left Side: Mobile Mockups */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/3]">
              {/* Instagram Mockup (Back) */}
              <motion.div 
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-[10%] w-[65%] z-0"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/64588ff89dcb2443c8809981_Instagram_20Template-13.png"
                  alt="Instagram Template"
                  width={350}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl rounded-[12px]"
                />
              </motion.div>
              {/* LinkedIn Mockup (Front) */}
              <motion.div 
                initial={{ opacity: 0, x: 50, rotate: 10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute right-[5%] top-0 w-[65%] z-10"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/643fc531e1ca1a396b3278dc_LinkedIn_20Template-14.png"
                  alt="LinkedIn Template"
                  width={350}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl rounded-[12px]"
                />
              </motion.div>
            </div>
          </div>

          {/* Center: Heart Node Graphic */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] items-center justify-center z-20">
            {/* The multi-branch shape from the assets */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative w-full h-full"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6421327a7894bf176a38502f_choose_20us_20shape-15.png"
                  alt="Process connections"
                  fill
                  className="object-contain"
                />
              </motion.div>
                <motion.div 
                  animate={{ 
                    scale: [1, 1.15, 1.08, 1.35, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                    times: [0, 0.15, 0.3, 0.5, 1]
                  }}
                  className="absolute bg-white rounded-full p-6 shadow-xl border border-[#E5E5E5] z-30"
                >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65d08635021f65525577ad46_Untitled_20design-16.png"
                  alt="Core Heart Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Side: Labels */}
          <div className="w-full md:w-1/2 flex flex-col gap-12 lg:pl-32">
            {items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="relative py-2 border-b border-[#E5E5E5] group cursor-default"
              >
                <h3 className="text-[32px] font-semibold text-black mb-1 group-hover:text-[#FA5E3E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[18px] text-[#545454]">{item.detail}</p>
                <div className="hidden lg:block absolute left-[-120px] top-1/2 w-[100px] h-[2px] bg-gradient-to-r from-transparent to-[#E5E5E5] origin-right group-hover:scale-x-110 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Heart Responsive (shows only on mobile/tablet) */}
        <div className="lg:hidden flex justify-center mt-12 mb-8">
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1.08, 1.35, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 0.5,
                ease: "easeInOut",
                times: [0, 0.15, 0.3, 0.5, 1]
              }}
              className="bg-white rounded-full p-4 shadow-xl border border-[#E5E5E5]"
            >
                 <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65d08635021f65525577ad46_Untitled_20design-16.png"
                  alt="Core Heart Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionProcess;