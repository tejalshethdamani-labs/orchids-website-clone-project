"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Hero Section component for 'Theone' marketing solution.
 * Features a centered layout with a large headline, description, 
 * and dual CTA buttons including a video popup.
 */
export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="relative w-full bg-white pt-[140px] md:pt-[185px] pb-0 overflow-hidden font-sans">
      {/* Decorative Floating Assets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Floating Phone */}
        <motion.div 
          initial={{ opacity: 0, x: -100, y: 50, rotate: -15 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="absolute left-[-5%] top-[20%] w-[15%] md:w-[12%] hidden lg:block"
        >
          <div className="relative aspect-[420/850] w-full rounded-[24px] overflow-hidden shadow-2xl border-[6px] border-[#f5f5f5]">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/645891b934d354e30453366f_Schedule-17.png"
              alt="Mobile View"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 100, y: -50, rotate: 15 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
          className="absolute right-[-2%] top-[15%] w-[18%] md:w-[15%] hidden lg:block"
        >
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/643fc531e1ca1a396b3278dc_LinkedIn_20Template-14.png"
            alt="Dashboard View"
            width={300}
            height={400}
            className="w-full h-auto drop-shadow-2xl rounded-xl"
          />
        </motion.div>

        {/* Bottom Floating Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] bottom-[10%] opacity-20 hidden lg:block"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-black fill-current">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-[15px] max-w-[1350px] relative z-10">
        <div className="flex flex-col items-center text-center max-w-[840px] mx-auto">
          {/* Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-[28px] w-full"
          >
            <h1 className="text-[40px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] text-black">
              All-in-one content strategy solution
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-[40px] w-full"
          >
            <p className="text-[18px] lg:text-[22px] leading-[1.6] text-[#575757]">
              Empowering your content marketing with AI-driven strategies for
              enhanced online engagement
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-[16px] mb-[100px]"
          >
            <a
              href="https://ee8rd61bc7j.typeform.com/to/LTq0qncw"
              className="group relative flex items-center justify-center bg-black text-white px-[40px] py-[18px] rounded-[12px] text-[16px] font-bold uppercase tracking-[0.05em] min-w-[240px] transition-all hover:bg-black/90 active:scale-95 overflow-hidden shadow-lg"
            >
              <span className="relative z-10">JOIN THE WAITLIST</span>
              <motion.div 
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </a>

            <button
              onClick={openVideo}
              className="group relative flex items-center justify-center bg-transparent border-2 border-black text-black px-[40px] py-[18px] rounded-[12px] text-[16px] font-bold uppercase tracking-[0.05em] min-w-[200px] transition-all hover:bg-black hover:text-white active:scale-95 shadow-sm"
            >
              <span className="relative z-10">Watch video</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md" 
              onClick={closeVideo}
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={closeVideo}
                className="absolute top-4 right-4 z-20 text-white/50 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/844309554?autoplay=1&app_id=122963"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Theone Product Video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Wave or spacing matching original */}
      <div className="w-full h-[80px] bg-white" />
    </section>
  );
}