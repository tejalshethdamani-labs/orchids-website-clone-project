import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const CtaFooter = () => {
  const logoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f31a6e5f-b749-4c81-9877-7b46341684ac-theone-1-webflow-io/assets/icons/65d083f0d6ab41d1debea795_logo_20heart_20black-1.png";

  return (
    <footer className="w-full bg-white font-sans overflow-hidden">
      {/* CTA Section */}
      <section className="pt-[120px] pb-[120px] text-center border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6">
          <span className="mini-title text-[14px] font-semibold uppercase tracking-[0.1em] text-[#000000] mb-4 block">
            WANT TO TRY OUR BETA RELEASE?
          </span>
          <h2 className="text-[48px] font-semibold leading-[1.2] text-[#000000] mb-6 max-w-[800px] mx-auto">
            Give AMaker a try for free!
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#545454] mb-10 max-w-[600px] mx-auto">
            Create ten Instagram Reels, Tik Toks, and Youtube Shorts in minutes for free!
          </p>
          <a
            href="https://ee8rd61bc7j.typeform.com/to/LTq0qncw"
            className="inline-block border border-[#000000] rounded-[50px] px-8 py-4 text-[14px] font-bold uppercase tracking-[0.05em] text-[#000000] transition-all hover:bg-black hover:text-white">

            TRY OUR BETA RELEASE
          </a>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="pt-[100px] pb-[40px]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
            {/* Branding & Contact */}
            <div className="max-w-[380px]">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoUrl}
                  alt="Theone Logo"
                  className="w-[35px] h-[35px] object-contain" />

                <span className="text-[24px] font-extrabold tracking-tight text-[#000000]">Theone</span>
              </div>
              <p className="text-[18px] leading-[1.6] text-[#545454] mb-8">
                Create, Manage & Grow your Content Strategy
              </p>
              <div className="space-y-2">
                <p className="text-[16px] text-[#000000] !whitespace-pre-line">
                  <span className="font-semibold">Email :</span> team@th1.ai
                </p>
                <p className="text-[16px] text-[#000000]">
                  <span className="font-semibold">Phone :</span> +1 (628) 230-2506
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' }].
                map((social, idx) =>
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#000000] transition-colors hover:bg-[#e5e5e5]"
                  aria-label={social.label}>

                    <social.icon size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="min-w-[150px]">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#000000] mb-8">
                NAVIGATION
              </h4>
              <ul className="space-y-4">
                {['Home', 'Contact', 'Sign Up'].map((link) =>
                <li key={link}>
                    <a
                    href="#"
                    className="text-[16px] text-[#545454] transition-colors hover:text-[#000000]">

                      {link}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Credits Bar */}
          <div className="mt-20 pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[14px] text-[#545454]">
              Copyright Theone, Inc @2024
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[14px] text-[#545454] hover:text-[#000000]">Privacy Policy</a>
              <a href="#" className="text-[14px] text-[#545454] hover:text-[#000000]">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </footer>);

};

export default CtaFooter;