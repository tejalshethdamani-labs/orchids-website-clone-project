"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Navbar component for Theone website.
 * Features a sticky header with glassmorphism, logo, and CTA button.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-[80px] md:h-[100px] flex items-center z-[1000] transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-[#E5E5E5] shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container max-w-[1350px] mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Left Section: Logo */}
          <div className="flex items-center h-[40px]">
            <a 
              href="/" 
              className="flex items-center group no-underline"
            >
              <div className="relative w-[35px] h-[35px] transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/icons/65d083f0d6ab41d1debea795_logo_20heart_20black-1.png" 
                  alt="Theone Logo heart" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="ml-3 text-[22px] md:text-[26px] font-black text-black tracking-tighter">
                THEONE
              </h1>
            </a>
          </div>

          {/* Right Section: CTA Button */}
          <div className="flex items-center">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://ee8rd61bc7j.typeform.com/to/LTq0qncw" 
              className="px-6 md:px-10 py-3 md:py-4 bg-black text-white text-[14px] md:text-[16px] font-bold uppercase rounded-[12px] tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              JOIN THE WAITLIST
            </motion.a>
          </div>

        </div>
      </div>
    </nav>
  );
}