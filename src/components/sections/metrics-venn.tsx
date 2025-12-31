"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="font-semibold text-[48px] leading-none mb-2"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ transition: { duration } }}
      >
        {end}
      </motion.span>
      {suffix}
    </motion.div>
  );
};

const MetricsVenn = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32">
          
          {/* Venn Diagram Container */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            {/* The overlapping circles */}
            <div className="relative w-full h-full">
              
              {/* Top Left Circle - Users on Waitlist */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-0 left-0 w-[65%] aspect-square rounded-full bg-[#333333] mix-blend-multiply flex flex-col items-center justify-center text-white text-center p-6 z-10"
              >
                <div className="font-semibold text-[48px] leading-none mb-2">1500</div>
                <span className="text-[14px] font-medium uppercase tracking-tight leading-tight">Users on the Waitlist</span>
              </motion.div>

              {/* Top Right Circle - Beta Users */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute top-[10%] right-0 w-[55%] aspect-square rounded-full bg-[#A5A5A5] mix-blend-multiply flex flex-col items-center justify-center text-white text-center p-6 z-10"
              >
                <div className="font-semibold text-[48px] leading-none mb-2">1</div>
                <span className="text-[14px] font-medium uppercase tracking-tight leading-tight">Beta Users</span>
              </motion.div>

              {/* Bottom Circle - Launch Date */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-0 left-[20%] w-[58%] aspect-square rounded-full bg-[#999999] mix-blend-multiply flex flex-col items-center justify-center text-white text-center p-6 z-10"
              >
                <div className="font-semibold text-[40px] leading-tight mb-1">02/11</div>
                <div className="text-[14px] font-medium uppercase tracking-widest leading-none mt-1">21 / 11</div>
                <span className="text-[14px] font-medium uppercase tracking-tight mt-2">Launch Date</span>
              </motion.div>

            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-[45%] lg:w-[40%] text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] font-semibold leading-[1.2] mb-6 text-black"
            >
              Our unique solution is in high demand.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[18px] text-[#545454] leading-[1.6]"
            >
              Our platform covers everything from content creation, to sales, the dollar impact of the content is directly measured, leaving no room for failed strategy.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MetricsVenn;