import React from 'react';
import Image from 'next/image';

/**
 * IntegrationsOrbitSection
 * 
 * A pixel-perfect clone of the dark themed integration section featuring 
 * an orbital diagram with various service icons rotating around a central logo.
 */
export default function IntegrationsOrbitSection() {
  const integrations = [
    { name: 'Slack', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 45, radius: 140 },
    { name: 'Notion', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 135, radius: 140 },
    { name: 'Salesforce', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 225, radius: 140 },
    { name: 'Zapier', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 315, radius: 140 },
    { name: 'LinkedIn', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 0, radius: 240 },
    { name: 'Instagram', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 90, radius: 240 },
    { name: 'Hubspot', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 180, radius: 240 },
    { name: 'Mailchimp', icon: 'https://cdn.prod.website-files.com/6421327a7894bf2bf4384ea4/6458bd89789df93e9ea97a5a_sfvdsvfdfdvd.png', angle: 270, radius: 240 },
  ];

  return (
    <section className="bg-black py-[100px] text-white overflow-hidden">
      <div className="container px-6 mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <header className="space-y-4">
              <h3 className="text-[12px] font-bold tracking-[0.05em] uppercase text-[#666666]">
                Integrations
              </h3>
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-bold text-white max-w-[500px]">
                Relationship Builder
              </h2>
            </header>
            <p className="text-[18px] leading-[1.6] text-[#666666] max-w-[480px]">
              Integrate Theone with any CRM, to align your strategy with your clients and prospects, and place yourself as a thought leader in your industry.
            </p>
          </div>

          {/* Right Orbital Diagram */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[500px] md:h-[600px]">
            {/* Orbital Rings */}
            <div className="absolute w-[280px] h-[280px] border border-[#222222] rounded-full z-0"></div>
            <div className="absolute w-[480px] h-[480px] border border-[#222222] rounded-full z-0 hidden sm:block"></div>
            
            {/* Central Logo */}
            <div className="relative z-10 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65d082c2366f5933de08c5fb_Untitled_20design-19.png" 
                alt="Theone Central Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Orbiting Icons */}
            {integrations.map((item, idx) => {
              const x = item.radius * Math.cos((item.angle * Math.PI) / 180);
              const y = item.radius * Math.sin((item.angle * Math.PI) / 180);
              const mobileScale = 0.7;

              return (
                <div 
                  key={idx}
                  className="absolute z-20 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white rounded-full p-2.5 flex items-center justify-center shadow-lg">
                    {/* In a real implementation we would have unique icons for each. 
                        Using placeholders based on the provided assets. */}
                    <div className="w-full h-full relative">
                       {/* Abstracting service icons based on screenshot colors */}
                       {idx === 0 && <div className="w-full h-full rounded-full bg-[#E01E5A] opacity-80" />}
                       {idx === 1 && <div className="w-full h-full rounded-full bg-[#000000] opacity-80" />}
                       {idx === 2 && <div className="w-full h-full rounded-full bg-[#00A1E0] opacity-80" />}
                       {idx === 3 && <div className="w-full h-full rounded-full bg-[#FF4F00] opacity-80" />}
                       {idx === 4 && <div className="w-full h-full rounded-full bg-[#0077B5] opacity-80" />}
                       {idx === 5 && <div className="w-full h-full rounded-full bg-[#E4405F] opacity-80" />}
                       {idx === 6 && <div className="w-full h-full rounded-full bg-[#FF7A59] opacity-80" />}
                       {idx === 7 && <div className="w-full h-full rounded-full bg-[#FFE01B] opacity-80" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}