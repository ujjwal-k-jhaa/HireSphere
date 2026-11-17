import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CapterraBadgeIcon, G2BadgeIcon, MeridianLogo } from './Icons';

interface BottomCtaAndFooterProps {
  onOpenDemo: () => void;
}

const FOOTER_COLUMNS = [
  {
    heading: 'Company',
    links: ['About Us', 'Contact Us', 'Blog', 'Pricing'],
  },
  {
    heading: 'Resource',
    links: ['Library', 'Articles', 'Templates', 'Events', 'Community'],
  },
  {
    heading: 'Industry',
    links: ['Agencies', 'Professional Services', 'Technology', 'Life Sciences', 'Insurance'],
  },
  {
    heading: 'Role',
    links: ['Chief Executive Officers', 'Human Resources Leaders', 'People Managers'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'System Status', 'Community', 'Sitemap'],
  },
  {
    heading: 'Social Media',
    links: ['Twitter', 'LinkedIn', 'Instagram', 'Facebook', 'Youtube'],
  },
];

export const BottomCtaAndFooter: React.FC<BottomCtaAndFooterProps> = ({
  onOpenDemo,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid work email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      {/* Bottom Azure Glow CTA */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bottom-cta-aura"
        />
        <div className="relative z-10 max-w-[680px] mx-auto px-5 text-center">
          <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold tracking-[-0.025em] leading-[1.12] text-[#111827] mb-3.5">
            One Platform For All Your HR Needs
          </h2>
          <p className="text-[15px] text-[#4B5563] mb-7">
            Ensure both are successful with Meridian
          </p>
          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={onOpenDemo}
              className="px-6 py-3 text-[13.5px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#132347]"
            >
              Request a demo
            </button>
          </div>
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

      {/* Footer */}
      <footer className="bg-[#F9FAFC] border-t border-slate-200/70 pt-14 pb-10">
        <div className="max-w-[1140px] mx-auto px-5 md:px-8">
          {/* Top Brand + Newsletter Row */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 pb-12 border-b border-slate-200/70">
            <div className="max-w-[340px]">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-[#111827] font-bold text-lg tracking-tight mb-3"
              >
                <MeridianLogo className="w-6 h-6" />
                <span>Meridian</span>
              </a>
              <p className="text-[12.5px] leading-relaxed text-[#6B7280]">
                Meridian is the #1 AI-powered people platform that turns
                managers into leaders, employees into high-performers, and
                companies into the best places to work.
              </p>
            </div>

            <div className="w-full max-w-[410px]">
              <div className="text-[13px] font-semibold text-[#111827] mb-3">
                Subscribe
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2.5 rounded-lg bg-[#EFF6FF] border border-[#93C5FD] px-4 py-3 text-[13px] text-[#132347] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Subscribed. Look out for our next HR briefing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} noValidate>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Enter Your Email"
                      aria-label="Email address"
                      className="flex-1 px-3.5 py-2.5 text-[13px] bg-white border border-slate-200 rounded-lg text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#132347]/30 focus:border-[#132347]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Get Started
                    </button>
                  </div>
                  {error && (
                    <p className="mt-1.5 text-[11.5px] text-rose-600">{error}</p>
                  )}
                  <p className="mt-2.5 text-[11px] text-[#9CA3AF]">
                    By subscribing you agree to with our{' '}
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="underline hover:text-[#4B5563] cursor-pointer"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* 6-Column Link Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-slate-200/70">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[12.5px] font-semibold text-[#111827] mb-3.5">
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${col.heading.toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenDemo();
                        }}
                        className="text-[12.5px] text-[#6B7280] hover:text-[#111827] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Legal Row */}
          <div className="pt-7 flex flex-col gap-3 text-[12px] text-[#9CA3AF]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="hover:text-[#4B5563] transition-colors cursor-pointer"
                >
                  Privacy policy
                </button>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="hover:text-[#4B5563] transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </div>
              <div>&copy; 2025 Meridian. All rights reserved.</div>
            </div>
            <p className="text-center sm:text-left text-[11.5px] text-[#6B7280] leading-relaxed">
              Disclaimer: This website is created solely as a web designer portfolio showcase and does not represent or belong to a real business.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
