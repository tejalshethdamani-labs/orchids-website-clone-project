import React from 'react';
import Image from 'next/image';

/**
 * LogoTicker component featuring an auto-scrolling grayscale partner logo ticker.
 * Aligned with Next.js 15, TypeScript, and Tailwind CSS.
 */
const LogoTicker: React.FC = () => {
  const logos = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4250c42b74fc224718_Untitled-1_2_20-_20Copy-2.png",
      alt: "Homecoaching",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4bac3e813fbce2d1e4_logo-light_2_20-_20Copy-3.png",
      alt: "World Peace Forum",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4b48724f7add4de7b5_Layer_2-4.png",
      alt: "Partner Logo",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4f4896eb9538de55fc_iep-logo-white-1_1-5.png",
      alt: "IEP",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb549b62c671f6189cbe_engel-and-voelkers-americ-6.png",
      alt: "Engel & Völkers",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb542608d14e4fb85541_Layer_2-1-7.png",
      alt: "Partner Logo",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb44c9f288047bd33bb5_Layer_3_20-_20Copy-8.png",
      alt: "Luxembourg Peace Prize",
    },
  ];

  return (
    <div className="section-bg bg-[#ffffff] overflow-hidden">
      <div className="sponsor-ticker-section py-[60px] md:py-[80px]">
        <div className="container mx-auto px-4 lg:px-6 max-w-[1200px]">
          <div className="sponsor-ticker-content-wrap relative overflow-hidden flex whitespace-nowrap">
            {/* 
              Continuous Scrolling Animation using Tailwind.
              We duplicate the list to ensure there are no gaps during the loop.
            */}
            <div className="flex animate-scroll hover:[animation-play-state:paused] min-w-full items-center justify-around gap-x-12 md:gap-x-24">
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={60}
                    className="sponsor-ticker-icon max-h-[45px] w-auto grayscale transition-all duration-300 hover:grayscale-0 opacity-60 hover:opacity-100"
                    priority={index < 4}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={60}
                    className="sponsor-ticker-icon max-h-[45px] w-auto grayscale transition-all duration-300 hover:grayscale-0 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;