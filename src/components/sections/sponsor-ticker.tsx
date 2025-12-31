"use client";

import React from 'react';

/**
 * SponsorTicker Component
 * 
 * Pixel-perfect clone of the horizontally scrolling sponsor logo ticker section.
 * Features monochromatic/grayscale logos of partner brands with an infinite scroll effect.
 */
const SponsorTicker: React.FC = () => {
  // Asset list from the provided list
  const logoAssets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4250c42b74fc224718_Untitled-1_2_20-_20Copy-2.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4bac3e813fbce2d1e4_logo-light_2_20-_20Copy-3.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4b48724f7add4de7b5_Layer_2-4.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb4f4896eb9538de55fc_iep-logo-white-1_1-5.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb549b62c671f6189cbe_engel-and-voelkers-americ-6.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb542608d14e4fb85541_Layer_2-1-7.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/6458bb44c9f288047bd33bb5_Layer_3_20-_20Copy-8.png"
  ];

  // We duplicate the logos to ensure a seamless infinite animation loop
  const duplicatedLogos = [...logoAssets, ...logoAssets, ...logoAssets];

  return (
    <section className="section-bg natural-color-200" style={{ backgroundColor: 'transparent' }}>
      <div className="sponsor-ticker-section" style={{ padding: '40px 0', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1350px', padding: '0 15px' }}>
          <div className="sponsor-ticker-content-wrap">
            {/* The infinite scroll slider */}
            <div 
              className="logo_component-slider" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '80px',
                width: 'max-content',
                animation: 'ticker-scroll 40s linear infinite'
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Sponsor Logo ${index + 1}`}
                  className="sponsor-ticker-icon"
                  style={{
                    display: 'block',
                    maxHeight: '40px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.6,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = '0.6')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .sponsor-ticker-section {
          position: relative;
        }

        /* Gradient mask for fading edges */
        .sponsor-ticker-section::before,
        .sponsor-ticker-section::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .sponsor-ticker-section::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }

        .sponsor-ticker-section::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        @media (max-width: 767px) {
          .logo_component-slider {
            gap: 40px;
            animation: ticker-scroll 25s linear infinite;
          }
          .sponsor-ticker-icon {
            max-height: 30px;
          }
          .sponsor-ticker-section::before,
          .sponsor-ticker-section::after {
            width: 50px;
          }
        }
      `}} />
    </section>
  );
};

export default SponsorTicker;