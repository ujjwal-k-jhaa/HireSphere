import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PORTRAITS } from '../data/assets';
import { AvatarImage } from './AvatarImage';
import {
  CapterraBadgeIcon,
  G2BadgeIcon,
  IsoBookCube,
  IsoDocCube,
  IsoEnvelopeCube,
  IsoRocketTile,
  IsoTargetTile,
  IsoTeamCube,
} from './Icons';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const scrollToPlatform = () => {
    document.getElementById('manager-bento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-10 md:pb-24 bg-white">
      {/* Subtle azure radial atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 h-[440px] hero-brand-aura"
      />

      {/* Floating 3D isometric illustrations on desktop margins */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block max-w-[1220px] mx-auto relative"
      >
        <div className="absolute -left-2 top-8 opacity-85 -rotate-6">
          <IsoEnvelopeCube className="w-20 h-20 drop-shadow-sm" />
        </div>
        <div className="absolute left-6 top-40 opacity-90 rotate-3">
          <IsoDocCube className="w-20 h-20 drop-shadow-sm" />
        </div>
        <div className="absolute left-28 top-64 opacity-95 -rotate-2">
          <IsoBookCube className="w-24 h-24 drop-shadow-sm" />
        </div>

        <div className="absolute -right-2 top-8 opacity-85 rotate-6">
          <IsoTeamCube className="w-20 h-20 drop-shadow-sm" />
        </div>
        <div className="absolute right-6 top-40 opacity-90 -rotate-3">
          <IsoTargetTile className="w-20 h-20 drop-shadow-sm" />
        </div>
        <div className="absolute right-28 top-64 opacity-95 rotate-2">
          <IsoRocketTile className="w-24 h-24 drop-shadow-sm" />
        </div>
      </div>

      <div className="relative z-10 max-w-[920px] mx-auto px-5 text-center">
        {/* Announcement link */}
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={scrollToPlatform}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#F3F6FC] border border-[#132347]/10 text-[12px] text-[#374151] hover:border-[#132347]/25 transition-colors cursor-pointer"
          >
            <span className="font-bold tracking-wide text-[10px] text-[#2563EB]">
              NEW RELEASE
            </span>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="font-medium text-[#374151]">
              Shape the future of work with Meridian
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
          </button>
        </div>

        {/* 5 overlapping circular studio portraits */}
        <div className="flex items-center justify-center mb-7">
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute w-32 h-32 rounded-full bg-[#60A5FA]/30 blur-xl"
            />
            <div className="relative flex items-center -space-x-3 md:-space-x-2">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-white bg-slate-100 grayscale opacity-75">
                <AvatarImage
                  src={PORTRAITS.executive}
                  alt="Executive team member"
                  className="w-full h-full object-cover object-top"
                  fallbackInitials="MV"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-white bg-slate-100 grayscale z-10">
                <AvatarImage
                  src={PORTRAITS.employee}
                  alt="People operations specialist"
                  className="w-full h-full object-cover object-top"
                  fallbackInitials="HT"
                />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-[#EFF6FF] z-20">
                <AvatarImage
                  src={PORTRAITS.heroCenter}
                  alt="Team lead portrait"
                  className="w-full h-full object-cover object-top"
                  fallbackInitials="MD"
                />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-white bg-slate-100 grayscale z-10">
                <AvatarImage
                  src={PORTRAITS.hrLeader}
                  alt="HR Director"
                  className="w-full h-full object-cover object-top"
                  fallbackInitials="SM"
                />
              </div>
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-white bg-slate-100 grayscale opacity-75">
                <AvatarImage
                  src={PORTRAITS.manager}
                  alt="Engineering manager"
                  className="w-full h-full object-cover object-top"
                  fallbackInitials="DP"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="text-[40px] sm:text-[52px] md:text-[62px] font-bold tracking-[-0.03em] leading-[1.06] text-[#111827] mb-5">
          The HR Platform
        </h1>

        {/* Subheadline */}
        <p className="max-w-[650px] mx-auto text-[15.5px] md:text-[17px] leading-[1.6] text-[#6B7280] mb-8">
          Now with HRIS, Meridian empowers{' '}
          <span className="tabular-nums font-medium text-[#374151]">5,000+</span>{' '}
          strategic HR teams to manage{' '}
          <span className="text-[#2563EB] font-medium">employee</span> information,
          drive <span className="text-[#2563EB] font-medium">performance</span>,
          capture team <span className="text-[#2563EB] font-medium">sentiment</span>,
          and report key <span className="text-[#2563EB] font-medium">insights</span>{' '}
          - all in one place.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-6 py-3 text-[14px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg shadow-sm transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#132347]"
          >
            Request a demo
          </button>
        </div>

        {/* G2 & Capterra Trust Badges */}
        <div className="flex items-center justify-center gap-6 text-[12px] text-[#6B7280] tabular-nums">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#374151]">4.7</span>
            <span>on G2.com</span>
            <G2BadgeIcon className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#374151]">4.5</span>
            <span>on Capterra</span>
            <CapterraBadgeIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
