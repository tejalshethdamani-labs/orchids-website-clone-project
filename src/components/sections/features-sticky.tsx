"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSticky = () => {
  const features = [
    {
      number: "01",
      title: "Create",
      details: "Experience the power of SmartContent® - creating winning content strategies in just under 10 minutes.",
      img1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df90cb57dbd516d1f3539f_2-9.png",
      img2: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df91ed79b8c6107146ee37_3-10.png",
      shape: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/svgs/6421327a7894bf6efd384f37_features_20shape_201-1.svg",
      bgColor: "#FDEEEA"
    },
    {
      number: "02",
      title: "Manage",
      details: (
        <div className="flex flex-col gap-4">
          <p>Take full control of your content funnel:</p>
          <ul className="space-y-4">
            <li className="flex gap-3 text-[18px]">
              <span className="text-black font-bold">1.</span>
              <span>Use our audio-responsive tool to seamlessly integrate feedback and new ideas, refining your content instantly.</span>
            </li>
            <li className="flex gap-3 text-[18px]">
              <span className="text-black font-bold">2.</span>
              <span>Monitor performance metrics effortlessly with just one click.</span>
            </li>
            <li className="flex gap-3 text-[18px]">
              <span className="text-black font-bold">3.</span>
              <span>Modify your schedule and budget in real-time based on tangible results.</span>
            </li>
          </ul>
        </div>
      ),
      img1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65dfa243880ad5b1b078b0e9_11-11.png",
      bgColor: "#F0F4FF"
    },
    {
      number: "03",
      title: "Grow",
      details: "Harness the power of our knowledge to optimise your campaigns to your predefined vision and 5-year roadmap.",
      img1: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df86b9d91a8069bc96212e_3-12.png",
      bgColor: "#E9F5F2"
    }
  ];

  return (
    <div className="bg-white">
      {/* Intro Header */}
      <div className="pt-[120px] pb-[80px] px-6 text-center max-w-[1200px] mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[14px] font-semibold uppercase tracking-[0.1em] text-black mb-4 block"
        >
          features
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-6"
        >
          Cost-effective and <br className="hidden lg:block" /> user-friendly
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[20px] lg:text-[24px] leading-[1.6] text-[#545454] max-w-[800px] mx-auto"
        >
          Our comprehensive solution was built to make <span className="font-bold text-black">high-quality marketing accessible to everyone.</span>
        </motion.p>
      </div>

        {/* Simple List of Features */}
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-col gap-[120px] pb-[160px]">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[14px] font-mono font-bold text-black mb-6">
                  <span># {feature.number} / 03</span>
                </div>
                <h3 className="text-[48px] lg:text-[56px] font-bold leading-[1.1] text-black mb-8 tracking-[-0.02em]">
                  {feature.title}
                </h3>
                <div className="text-[20px] lg:text-[22px] leading-[1.6] text-[#545454]">
                  {feature.details}
                </div>
              </div>

              {/* Graphic Side */}
              <div className="flex-1 w-full">
                <div 
                  className="relative aspect-square w-full rounded-[40px] flex items-center justify-center p-8 lg:p-12 overflow-hidden shadow-sm"
                  style={{ backgroundColor: `${feature.bgColor}` }}
                >
                  {idx === 0 && (
                    <div className="relative w-full max-w-[400px]">
                      <img 
                        src={feature.img1} 
                        alt="Create Step Primary" 
                        className="w-full h-auto drop-shadow-2xl z-[2] relative"
                      />
                      <motion.img 
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        src={feature.shape} 
                        alt="Decorative shape" 
                        className="absolute -bottom-10 -left-10 w-32 h-auto z-[1]"
                      />
                      <motion.img 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        src={feature.img2} 
                        alt="Create Step UI" 
                        className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 drop-shadow-2xl z-[3]"
                      />
                    </div>
                  )}
                  
                  {idx === 1 && (
                    <div className="relative w-full max-w-[440px]">
                      <motion.img 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        src={feature.img1} 
                        alt="Manage Step UI" 
                        className="w-full h-auto drop-shadow-2xl rounded-2xl"
                      />
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="relative w-full max-w-[440px]">
                      <motion.img 
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        src={feature.img1} 
                        alt="Grow Step UI" 
                        className="w-full h-auto drop-shadow-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default FeaturesSticky;
