import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * Footer Component
 * Cloned based on design instructions, global styles, and visual reference.
 * Includes brand logo, mission statement, contact details, navigation, social icons, and copyright.
 */
export default function Footer() {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/icons/65d083f0d6ab41d1debea795_logo_20heart_20black-1.png";

  return (
    <footer className="w-full bg-white pt-[100px] pb-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-20">
          
          {/* Brand & Mission Section */}
          <div className="max-w-[400px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-[35px] h-[35px] relative">
                <Image 
                  src={logoUrl} 
                  alt="Theone Logo" 
                  width={35} 
                  height={35}
                  className="object-contain"
                />
              </div>
              <h2 className="text-[26px] font-bold tracking-tight text-black m-0 leading-tight uppercase">
                Theone
              </h2>
            </div>
            
            <p className="text-[18px] text-[#666666] mb-8 leading-relaxed">
              Create, Manage & Grow your Content Strategy
            </p>

            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-black font-semibold text-[16px]">Email : team@tf1.ai</span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-semibold text-[16px]">Phone : +1 (628) 230-2506</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col">
            <h3 className="text-[12px] font-bold uppercase tracking-widest text-black mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-[16px] text-[#000000] font-medium hover:opacity-70 transition-opacity">
                Home
              </a>
              <a href="#" className="text-[16px] text-[#000000] font-medium hover:opacity-70 transition-opacity">
                Contact
              </a>
              <a href="#" className="text-[16px] text-[#000000] font-medium hover:opacity-70 transition-opacity">
                Sign Up
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#e2e2e2] mb-8"></div>

        {/* Sub-Footer / Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#666666]">
          <div className="order-2 md:order-1 font-medium italic md:not-italic">
            Copyright Theone, Inc @2024
          </div>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}