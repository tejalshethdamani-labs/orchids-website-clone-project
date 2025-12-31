import React from 'react';
import Image from 'next/image';

const FeaturesStack = () => {
  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="container mx-auto px-[15px] max-w-[1350px]">
        {/* Features Header */}
        <div className="text-center mb-[80px]">
          <div className="flex justify-center mb-4">
            <span className="uppercase text-[12px] font-bold tracking-[0.05em] text-black">
              features
            </span>
          </div>
          <h2 className="text-[36px] font-bold text-black mb-5 leading-[1.2]">
            Cost-effective and user-friendly
          </h2>
          <p className="text-[18px] text-[#666666] max-w-[700px] mx-auto leading-[1.6]">
            Our comprehensive solution was built to make <strong className="text-black font-semibold">high-quality marketing accessible to everyone.</strong>
          </p>
        </div>

        {/* Scrolling Features Layout */}
        <div className="flex flex-col gap-[100px]">
          {/* Step 1: Create */}
          <div className="flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-4">
                <div className="font-mono text-[14px] font-medium text-black"># 01 / 03</div>
                <h3 className="text-[36px] font-bold text-black">Create</h3>
                <p className="text-[18px] text-[#666666] leading-[1.6]">
                  Experience the power of SmartContent® - creating winning content strategies in just under 10 minutes.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-[20px] bg-[#F5F5F5] p-10 flex items-center justify-center min-h-[400px]">
                <div className="relative z-10">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df90cb57dbd516d1f3539f_2-9.png"
                    alt="Create UI"
                    width={480}
                    height={320}
                    className="rounded-lg shadow-sm"
                  />
                  {/* Floating elements from assets */}
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df91ed79b8c6107146ee37_3-10.png"
                    alt="Create badge"
                    width={124}
                    height={100}
                    className="absolute -bottom-10 -right-5 z-20"
                  />
                </div>
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/svgs/6421327a7894bf6efd384f37_features_20shape_201-1.svg"
                  alt="Background shape"
                  width={300}
                  height={300}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Manage */}
          <div className="flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
            <div className="w-full md:w-1/2 order-1">
              <div className="relative rounded-[20px] bg-[#F5F5F5] p-10 flex items-center justify-center min-h-[400px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65dfa243880ad5b1b078b0e9_11-11.png"
                  alt="Manage UI"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-2">
              <div className="space-y-4">
                <div className="font-mono text-[14px] font-medium text-black"># 02 / 03</div>
                <h3 className="text-[36px] font-bold text-black">Manage</h3>
                <div className="text-[18px] text-[#666666] leading-[1.6] space-y-4">
                  <p>Take full control of your content funnel:</p>
                  <ol className="list-none space-y-4 pl-0">
                    <li className="flex gap-2">
                      <span className="font-semibold text-black">1.</span>
                      <span>Use our audio-responsive tool to seamlessly integrate feedback and new ideas, refining your content instantly.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-black">2.</span>
                      <span>Monitor performance metrics effortlessly with just one click.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-black">3.</span>
                      <span>Modify your schedule and budget in real-time based on tangible results.</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Grow */}
          <div className="flex flex-col md:flex-row items-center gap-[60px] md:gap-[100px]">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-4">
                <div className="font-mono text-[14px] font-medium text-black"># 03 / 03</div>
                <h3 className="text-[36px] font-bold text-black">Grow</h3>
                <p className="text-[18px] text-[#666666] leading-[1.6]">
                  Harness the power of our knowledge to optimise your campaigns to your predefined vision and 5-year roadmap.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-[20px] bg-[#F5F5F5] p-10 flex items-center justify-center min-h-[400px]">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/images/65df86b9d91a8069bc96212e_3-12.png"
                  alt="Grow UI"
                  width={480}
                  height={320}
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesStack;