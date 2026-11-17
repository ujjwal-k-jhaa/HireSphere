import React from 'react';
import {
  RefreshCw,
  Heart,
  Target,
  ShieldCheck,
  UserCheck,
  Users,
  Link2,
  LogIn,
} from 'lucide-react';

interface PlatformArcSectionProps {
  onOpenDemo: () => void;
}

const ARC_ICONS = [
  { Icon: RefreshCw, label: 'Continuous Sync', x: '8%', y: '72%' },
  { Icon: Heart, label: 'Pulse Sentiment', x: '16%', y: '44%' },
  { Icon: Target, label: 'OKR Alignment', x: '29%', y: '23%' },
  { Icon: ShieldCheck, label: 'SOC 2 Security', x: '43%', y: '13%' },
  { Icon: UserCheck, label: 'Performance Reviews', x: '57%', y: '13%' },
  { Icon: Users, label: 'Org Directory', x: '71%', y: '23%' },
  { Icon: Link2, label: 'Integrations', x: '84%', y: '44%' },
  { Icon: LogIn, label: 'Seamless Onboarding', x: '92%', y: '72%' },
];

export const PlatformArcSection: React.FC<PlatformArcSectionProps> = ({
  onOpenDemo,
}) => {
  return (
    <section id="platform-arc" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[920px] mx-auto px-5 text-center">
        {/* Semicircular Cobalt-Azure Arch with 8 Floating Capability Tiles */}
        <div className="relative mx-auto w-full max-w-[660px] h-[250px] sm:h-[310px] mb-2">
          {/* Arch dome background */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 bottom-0 top-4 rounded-t-full platform-arc-dome opacity-85"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-[22%] bottom-0 top-[38%] rounded-t-full bg-white"
          />

          {/* 8 Floating Capability Tiles */}
          {ARC_ICONS.map(({ Icon, label, x, y }) => (
            <div
              key={label}
              title={label}
              style={{ left: x, top: y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-[#132347] hover:scale-105 transition-transform duration-150"
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
            </div>
          ))}

          {/* Centered Kicker nested inside lower dome */}
          <div className="absolute inset-x-0 bottom-5 flex justify-center">
            <span className="text-[12px] font-semibold text-[#2563EB] tracking-wide">
              Meridian People Platform
            </span>
          </div>
        </div>

        {/* Heading & CTA */}
        <h2 className="max-w-[540px] mx-auto text-[30px] sm:text-[38px] md:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#111827] mb-7">
          Build An Operationally Excellent Company
        </h2>

        <button
          type="button"
          onClick={onOpenDemo}
          className="px-6 py-3 text-[13.5px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#132347]"
        >
          Discover Now
        </button>
      </div>
    </section>
  );
};
