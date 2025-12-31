"use client";

import React from 'react';
import Image from 'next/image';

const IntegrationsDark: React.FC = () => {
    const ring1Icons = [
      { logo: 'https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg', label: 'TikTok' },
      { logo: 'https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg', label: 'Instagram' },
      { logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg', label: 'ChatGPT' },
      { logo: 'https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg', label: 'Pinterest' },
      { logo: 'https://www.vectorlogo.zone/logos/twitch/twitch-icon.svg', label: 'Twitch' },
      { logo: 'https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg', label: 'Drive' },
    ];
  
    const ring2Icons = [
      { logo: 'https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg', label: 'Twitter' },
      { logo: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg', label: 'Slack' },
      { logo: 'https://www.vectorlogo.zone/logos/upwork/upwork-icon.svg', label: 'Upwork' },
      { logo: 'https://www.vectorlogo.zone/logos/notion/notion-icon.svg', label: 'Notion' },
      { logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg', label: 'Salesforce' },
      { logo: 'https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg', label: 'YouTube' },
      { logo: 'https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg', label: 'LinkedIn' },
      { logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg', label: 'Hubspot' },
      { logo: 'https://www.vectorlogo.zone/logos/discordapp/discordapp-icon.svg', label: 'Discord' },
      { logo: 'https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg', label: 'Spotify' },
      { logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg', label: 'Google Ads' },
      { logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg', label: 'Meta' },
    ];
  
    return (
      <section className="bg-[#000000] py-[160px] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
            
            <div className="flex flex-col max-w-[480px]">
              <span className="text-[14px] font-semibold text-white uppercase tracking-[0.2em] mb-6">
                Integrations
              </span>
              <h2 className="text-[56px] font-bold text-white leading-[1.1] mb-8 tracking-[-0.02em]">
                Relationship <br />Builder
              </h2>
              <p className="text-[20px] text-[#A1A1A1] leading-[1.6]">
                Integrate Theone with any CRM, to align your strategy with your clients and prospects, and place yourself as a thought leader in your industry.
              </p>
            </div>
  
            <div className="relative flex items-center justify-center min-h-[600px]">
              <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center">
                
                {/* Background Circle Lines */}
                <div className="absolute inset-0 rounded-full border border-white/[0.15] pointer-events-none" />
                <div className="absolute w-[66%] h-[66%] rounded-full border border-white/[0.15] pointer-events-none" />
                
                {/* Cross lines for aesthetic */}
                <div className="absolute w-full h-[1px] bg-white/[0.05] top-1/2 left-0" />
                <div className="absolute w-[1px] h-full bg-white/[0.05] left-1/2 top-0" />

                {/* Outer Ring Icons */}
                <div className="absolute inset-0">
                  {ring2Icons.map((item, index) => {
                    const delay = (index * -80) / ring2Icons.length;
                    return (
                      <div 
                        key={index}
                        className="absolute inset-0 animate-orbit"
                        style={{ animationDelay: `${delay}s`, animationDuration: '80s' }}
                      >
                        <div 
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl p-3 animate-counter-orbit"
                          style={{ animationDelay: `${delay}s`, animationDuration: '80s' }}
                        >
                          <img src={item.logo} alt={item.label} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                      </div>
                    );
                  })}
                </div>
  
                {/* Inner Ring Icons */}
                <div className="absolute w-[66%] h-[66%]">
                  {ring1Icons.map((item, index) => {
                    const delay = (index * -50) / ring1Icons.length;
                    return (
                      <div 
                        key={index}
                        className="absolute inset-0 animate-orbit-reverse"
                        style={{ animationDelay: `${delay}s`, animationDuration: '50s' }}
                      >
                        <div 
                          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-2.5 animate-counter-orbit-reverse"
                          style={{ animationDelay: `${delay}s`, animationDuration: '50s' }}
                        >
                          <img src={item.logo} alt={item.label} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                      </div>
                    );
                  })}
                </div>
  
                {/* Center Core (Beating Heart) */}
                <div className="relative z-10 w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.2)] animate-heartbeat cursor-pointer group">
                  <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 group-hover:scale-150 transition-transform duration-500" />
                  <Image 
                    src="https://res.cloudinary.com/dwfqp6qz1/image/upload/v1767197078/th1-heart-logo_vhmoqj.png" 
                    alt="Theone Logo" 
                    width={60} 
                    height={60}
                    className="object-contain relative z-10"
                  />
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes counter-orbit {
            from { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
            to { transform: translateX(-50%) translateY(-50%) rotate(-360deg); }
          }
          @keyframes counter-orbit-reverse {
            from { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
            to { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
          }
          @keyframes heartbeat {
            0% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.2); }
            14% { transform: scale(1.12); box-shadow: 0 0 60px rgba(255,255,255,0.4); }
            28% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.2); }
            42% { transform: scale(1.12); box-shadow: 0 0 60px rgba(255,255,255,0.4); }
            70% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.2); }
          }
          .animate-orbit {
            animation: orbit linear infinite;
          }
          .animate-orbit-reverse {
            animation: orbit-reverse linear infinite;
          }
          .animate-counter-orbit {
            animation: counter-orbit linear infinite;
          }
          .animate-counter-orbit-reverse {
            animation: counter-orbit-reverse linear infinite;
          }
          .animate-heartbeat {
            animation: heartbeat 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}} />
      </section>
    );
};

export default IntegrationsDark;
