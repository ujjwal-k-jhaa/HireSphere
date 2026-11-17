import React from 'react';

interface IntegrationsSectionProps {
  onOpenIntegrations: () => void;
}

const TILE_APPS: Record<number, { name: string; color: string; bg: string; glyph: React.ReactNode }> = {
  3: {
    name: 'Discord',
    color: '#5865F2',
    bg: '#EEF0FF',
    glyph: (
      <svg viewBox="0 0 24 20" fill="currentColor" className="w-7 h-6">
        <path d="M19.8 2.8A16.5 16.5 0 0 0 15.7 1.5L15.2 2.5A15.2 15.2 0 0 0 8.8 2.5L8.3 1.5A16.5 16.5 0 0 0 4.2 2.8C1.6 6.7.9 10.5 1.2 14.3A16.6 16.6 0 0 0 6.2 16.8L7 15.6A10.7 10.7 0 0 1 5.2 14.7L5.6 14.4C9.5 16.2 14.5 16.2 18.4 14.4L18.8 14.7A10.7 10.7 0 0 1 17 15.6L17.8 16.8A16.6 16.6 0 0 0 22.8 14.3C23.2 9.9 22.1 6.1 19.8 2.8Z" />
      </svg>
    ),
  },
  8: {
    name: 'ClickUp',
    color: '#7B68EE',
    bg: '#F3F1FE',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M5 14.5C7 17.8 9.4 19.2 12 19.2C14.6 19.2 17 17.8 19 14.5" stroke="#7B68EE" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M6.5 10.5L12 5L17.5 10.5" stroke="#FF2D7A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  17: {
    name: 'Monday',
    color: '#FF3D57',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="4" y="8" width="4" height="10" rx="2" transform="rotate(-22 4 8)" fill="#FF3D57" />
        <rect x="10" y="8" width="4" height="10" rx="2" transform="rotate(-22 10 8)" fill="#FFCB00" />
        <circle cx="18.5" cy="15.5" r="2.2" fill="#00CA72" />
      </svg>
    ),
  },
  21: {
    name: 'Notion',
    color: '#111827',
    bg: '#FFFFFF',
    glyph: (
      <span className="font-serif font-bold text-2xl text-[#111827]">N</span>
    ),
  },
  23: {
    name: 'Trello',
    color: '#0079BF',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#0079BF" />
        <rect x="6.5" y="6.5" width="4.5" height="10" rx="1" fill="white" />
        <rect x="13" y="6.5" width="4.5" height="6.5" rx="1" fill="white" />
      </svg>
    ),
  },
  30: {
    name: 'Webflow',
    color: '#146EF5',
    bg: '#FFFFFF',
    glyph: (
      <span className="font-extrabold italic text-xl text-[#146EF5]">W</span>
    ),
  },
  36: {
    name: 'Zoom',
    color: '#2D8CFF',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="2" y="6" width="14" height="12" rx="3" fill="#2D8CFF" />
        <path d="M17 10L22 7V17L17 14V10Z" fill="#2D8CFF" />
      </svg>
    ),
  },
  40: {
    name: 'Asana',
    color: '#F06A6A',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <circle cx="12" cy="7" r="3.2" fill="#F06A6A" />
        <circle cx="7" cy="15.5" r="3.2" fill="#F06A6A" />
        <circle cx="17" cy="15.5" r="3.2" fill="#F06A6A" />
      </svg>
    ),
  },
  46: {
    name: 'Slack',
    color: '#4A154B',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="10" y="3" width="3" height="7" rx="1.5" fill="#36C5F0" />
        <rect x="14" y="10" width="7" height="3" rx="1.5" fill="#2EB67D" />
        <rect x="11" y="14" width="3" height="7" rx="1.5" fill="#ECB22E" />
        <rect x="3" y="11" width="7" height="3" rx="1.5" fill="#E01E5A" />
      </svg>
    ),
  },
  49: {
    name: 'Linear',
    color: '#5E6AD2',
    bg: '#FFFFFF',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M5 17L17 5M5 12L12 5M10 19L19 10" stroke="#3B82F6" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  onOpenIntegrations,
}) => {
  const cells = Array.from({ length: 55 }, (_, i) => i);

  return (
    <section id="integrations" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5 md:px-8 relative">
        {/* Background Grid of subtle squares + highlighted app tiles */}
        <div
          aria-hidden="true"
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-11 gap-3.5 md:gap-4 opacity-95"
        >
          {cells.map((idx) => {
            const app = TILE_APPS[idx];
            // Keep center area clear for the headline
            const row = Math.floor(idx / 11);
            const col = idx % 11;
            const isCenterMask = row >= 1 && row <= 3 && col >= 2 && col <= 8;

            if (app) {
              return (
                <div
                  key={idx}
                  title={app.name}
                  style={{ backgroundColor: app.bg, color: app.color }}
                  className="aspect-square rounded-2xl border border-slate-200/80 shadow-[0_6px_20px_rgba(15,23,42,0.05)] flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {app.glyph}
                </div>
              );
            }

            return (
              <div
                key={idx}
                className={`aspect-square rounded-2xl ${
                  isCenterMask
                    ? 'bg-transparent'
                    : 'bg-[#F6F8F9] border border-slate-100/80'
                }`}
              />
            );
          })}
        </div>

        {/* Centered Headline + CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center pointer-events-none">
          <div className="bg-white/85 backdrop-blur-xs rounded-3xl px-6 py-6 sm:px-10 sm:py-8 pointer-events-auto max-w-[560px]">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold tracking-[-0.025em] leading-[1.15] text-[#111827] mb-6">
              Seamless Integrations
              <br />
              With Your Entire Tech Stack
            </h2>
            <button
              type="button"
              onClick={onOpenIntegrations}
              className="px-6 py-2.5 text-[13.5px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#132347]"
            >
              See All Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
