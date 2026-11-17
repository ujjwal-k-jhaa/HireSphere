import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { MeridianLogo } from './Icons';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenLogin: () => void;
}

const PLATFORM_ITEMS = [
  { label: 'Core HRIS', desc: 'Centralized employee records & org chart', href: '#platform-arc' },
  { label: 'OKRs & Goals', desc: 'Align teams with transparent objectives', href: '#manager-bento' },
  { label: 'Performance Reviews', desc: 'Structured 360 feedback & calibrations', href: '#strategic-tools' },
  { label: 'People Analytics', desc: 'Compensation & retention insights', href: '#manager-bento' },
];

const RESOURCE_ITEMS = [
  { label: 'Customer Stories', desc: 'How Dropbox & Webflow scale culture', href: '#workplace-roles' },
  { label: 'Integration Hub', desc: 'Connect Slack, Notion, Jira & Okta', href: '#integrations' },
  { label: 'Strategic HR Playbooks', desc: 'Templates for 1:1s and review cycles', href: '#strategic-tools' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenLogin }) => {
  const [openDropdown, setOpenDropdown] = useState<'platform' | 'resources' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-900/[0.06]"
    >
      <div className="max-w-[1220px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-[#111827] font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded-md"
        >
          <MeridianLogo className="w-6 h-6 shrink-0" />
          <span>Meridian</span>
        </a>

        {/* Zone 2: Primary navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#4B5563]">
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === 'platform' ? null : 'platform')
              }
              aria-expanded={openDropdown === 'platform'}
              className="flex items-center gap-1 py-2 hover:text-[#111827] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded"
            >
              <span>Platform</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'platform' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'platform' && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl border border-slate-900/10 shadow-lg p-2 z-50">
                {PLATFORM_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollTo(item.href)}
                    className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="text-[13px] font-semibold text-[#111827]">
                      {item.label}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollTo('#workplace-roles')}
            className="py-2 hover:text-[#111827] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded"
          >
            Solutions
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === 'resources' ? null : 'resources')
              }
              aria-expanded={openDropdown === 'resources'}
              className="flex items-center gap-1 py-2 hover:text-[#111827] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded"
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'resources' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl border border-slate-900/10 shadow-lg p-2 z-50">
                {RESOURCE_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollTo(item.href)}
                    className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div className="text-[13px] font-semibold text-[#111827]">
                      {item.label}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-0.5">
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollTo('#why-choose-us')}
            className="py-2 hover:text-[#111827] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded"
          >
            Pricing
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenLogin}
            className="px-3 py-2 text-[13.5px] font-medium text-[#374151] hover:text-[#111827] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] rounded-lg"
          >
            Login
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-4 py-2 text-[13px] font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#132347]"
          >
            Request a demo
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-lg text-[#374151] hover:bg-slate-100 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3">
          <button
            type="button"
            onClick={() => scrollTo('#manager-bento')}
            className="block w-full text-left py-2 text-sm font-medium text-[#374151]"
          >
            Platform
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#workplace-roles')}
            className="block w-full text-left py-2 text-sm font-medium text-[#374151]"
          >
            Solutions
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#integrations')}
            className="block w-full text-left py-2 text-sm font-medium text-[#374151]"
          >
            Resources
          </button>
          <button
            type="button"
            onClick={() => scrollTo('#strategic-tools')}
            className="block w-full text-left py-2 text-sm font-medium text-[#374151]"
          >
            Pricing
          </button>
          <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenLogin();
              }}
              className="flex-1 py-2.5 text-sm font-medium text-[#374151] border border-slate-200 rounded-lg"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenDemo();
              }}
              className="flex-1 py-2.5 text-sm font-semibold text-white bg-[#132347] rounded-lg"
            >
              Request a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
