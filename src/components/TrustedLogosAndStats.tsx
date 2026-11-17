import React from 'react';
import { PartnerLogos } from './Icons';

export const TrustedLogosAndStats: React.FC = () => {
  return (
    <>
      {/* Logo Strip */}
      <section className="py-8 md:py-10 border-b border-slate-100 bg-white">
        <div className="max-w-[1140px] mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-7">
            POWERING THE WORLD&apos;S BEST COMPANIES
          </p>
          <PartnerLogos />
        </div>
      </section>

      {/* Why Choose Us — Metrics Bento */}
      <section id="why-choose-us" className="relative py-20 md:py-28 bg-white bg-subtle-grid overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Label + Main Editorial Claim */}
            <div className="lg:col-span-5 flex flex-col justify-between lg:min-h-[420px]">
              <div>
                <p className="text-[13px] font-medium text-[#6B7280] leading-snug">
                  Why
                  <br />
                  Choose Us
                </p>
              </div>

              <h2 className="mt-12 lg:mt-0 text-[28px] sm:text-[32px] md:text-[35px] font-semibold tracking-[-0.025em] leading-[1.18] text-[#111827]">
                Empowers HR with{' '}
                <span className="text-[#3B82F6]">AI-driven</span> tools to
                optimize teams,{' '}
                <span className="text-[#9CA3AF] font-normal">
                  boost productivity, and drive success
                </span>
              </h2>
            </div>

            {/* Right Column: Staggered 2x2 Metric Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[580px] lg:ml-auto">
                {/* Row 1 Card 1: 5K+ (Vibrant Azure) */}
                <div className="rounded-2xl bg-[#6096FA] p-7 min-h-[190px] flex flex-col justify-between shadow-sm">
                  <div className="text-[48px] md:text-[52px] font-semibold tracking-tight text-[#0B1736] leading-none tabular-nums">
                    5K+
                  </div>
                  <div className="text-[14px] font-medium text-[#0E224D] leading-snug">
                    Organizations
                    <br />
                    trust
                  </div>
                </div>

                {/* Row 1 Card 2: 78% (Soft Light Gray) */}
                <div className="rounded-2xl bg-[#F3F5F9] border border-slate-200/70 p-7 min-h-[190px] flex flex-col justify-between">
                  <div className="text-[48px] md:text-[52px] font-semibold tracking-tight text-[#111827] leading-none tabular-nums">
                    78<span className="text-[#9CA3AF] text-[36px] font-medium">%</span>
                  </div>
                  <div className="text-[14px] font-medium text-[#6B7280] leading-snug">
                    Reduces
                    <br />
                    administration time
                  </div>
                </div>

                {/* Row 2 Card 3: 25% (Soft Ice Blue) */}
                <div className="sm:translate-x-10 md:translate-x-16 rounded-2xl bg-[#C2D9FE] p-7 min-h-[190px] flex flex-col justify-between shadow-sm">
                  <div className="text-[48px] md:text-[52px] font-semibold tracking-tight text-[#0B1736] leading-none tabular-nums">
                    25<span className="text-[36px] font-medium opacity-80">%</span>
                  </div>
                  <div className="text-[14px] font-medium text-[#132347] leading-snug">
                    Reduced
                    <br />
                    Manual Work
                  </div>
                </div>

                {/* Row 2 Card 4: 6M */}
                <div className="sm:translate-x-10 md:translate-x-16 rounded-2xl bg-[#F3F5F9] border border-slate-200/70 p-7 min-h-[190px] flex flex-col justify-between">
                  <div className="text-[48px] md:text-[52px] font-semibold tracking-tight text-[#111827] leading-none tabular-nums">
                    6<span className="text-[#9CA3AF] text-[40px] font-medium">M</span>
                  </div>
                  <div className="text-[14px] font-medium text-[#6B7280] leading-snug">
                    Pieces of
                    <br />
                    Feedback Shared
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
