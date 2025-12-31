import React from 'react';

/**
 * CtaAmaker Component
 * Includes the "Give AMaker a try for free!" section,
 * center-aligned text and a "TRY OUR BETA RELEASE" button.
 */
const CtaAmaker: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        {/* Sub-label */}
        <div className="mb-6">
          <span 
            className="text-[12px] font-semibold uppercase tracking-[0.05em] text-[#000000]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            WANT TO TRY OUR BETA RELEASE?
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="text-[32px] sm:text-[36px] font-bold text-[#000000] mb-6 leading-[1.2]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Give AMaker a try for free!
        </h2>

        {/* Description */}
        <p 
          className="text-[16px] sm:text-[18px] text-[#666666] max-w-[580px] mb-10 leading-[1.6]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Create ten Instagram Reels, Tik Toks, and Youtube Shorts in minutes for free!
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center justify-center px-[34px] py-[16px] border border-[#E2E2E2] rounded-[10px] text-[#000000] text-[14px] font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          TRY OUR BETA RELEASE
        </a>
      </div>
    </section>
  );
};

export default CtaAmaker;