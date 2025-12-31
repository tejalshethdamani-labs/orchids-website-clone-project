"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "1. Can I trial Theone before paying?",
    answer: "Yes, you can start with a trial period to explore all our features and see how Theone fits into your marketing workflow before committing to a paid plan."
  },
  {
    question: "2. How does Theone work?",
    answer: "Theone uses advanced AI to analyze your brand voice and target audience, then generates a cohesive content strategy across multiple channels in under 10 minutes."
  },
  {
    question: "3. How much will this cost?",
    answer: "We offer various pricing tiers designed to be accessible for businesses of all sizes. Our goal is to make high-quality marketing solutions cost-effective for everyone."
  },
  {
    question: "4. When is it a good time to join?",
    answer: "The best time to join is right now. Our platform is currently in high demand, and joining early ensures you get priority access to new features and beta releases."
  }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-[100px]">
          {/* Left Side: Titles */}
          <div className="md:w-1/3 pt-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mini-title text-[14px] font-semibold uppercase tracking-[0.1em] text-black mb-4 block"
            >
              question
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-black"
            >
              In case you missed anything.
            </motion.h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="md:w-2/3 flex flex-col gap-4">
            {faqData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="overflow-hidden border border-[#E5E5E5] rounded-[16px] transition-shadow duration-300 bg-white"
                style={{
                  boxShadow: activeIndex === index ? "0 10px 40px rgba(0,0,0,0.06)" : "none"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left focus:outline-none group"
                >
                  <h6 className="text-[20px] font-semibold text-black leading-[1.4] transition-colors group-hover:text-[#FA5E3E]">
                    {item.question}
                  </h6>
                  <motion.div 
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] group-hover:border-[#FA5E3E] transition-colors"
                  >
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/svgs/6421327a7894bf6874384f19_plus_20icon-3.svg"
                      alt="Toggle"
                      width={16}
                      height={16}
                      className="opacity-80"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-[#545454] text-[18px] leading-[1.6]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;