import React, { useState } from 'react';
import { CheckCircle2, Search, X } from 'lucide-react';
import { ALL_INTEGRATIONS } from '../data/assets';
import { MeridianLogo } from './Icons';

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

const ModalBackdrop: React.FC<ModalBaseProps> = ({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-md',
}) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-7`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

export const DemoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('50–250 employees');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setError('');
    onClose();
  };

  return (
    <ModalBackdrop isOpen={isOpen} onClose={handleResetAndClose}>
      <div className="flex items-center gap-2 mb-4">
        <MeridianLogo className="w-6 h-6" />
        <span className="font-bold text-[#111827]">Meridian</span>
      </div>

      {submitted ? (
        <div className="py-4 text-center space-y-3">
          <div className="w-11 h-11 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#111827]">Demo Request Confirmed</h3>
          <p className="text-sm text-[#6B7280]">
            Thank you, {name}. A Meridian product specialist will reach out to{' '}
            <span className="font-medium text-[#111827]">{email}</span> shortly.
          </p>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="mt-2 w-full py-2.5 text-sm font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-[#111827] mb-1">
            Request a personalized demo
          </h3>
          <p className="text-[13px] text-[#6B7280] mb-5">
            See how 5,000+ strategic HR teams unify HRIS, OKRs, and performance.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
            <div>
              <label className="block text-[12px] font-medium text-[#374151] mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jordan Taylor"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132347]/25 focus:border-[#132347]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#374151] mb-1">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jordan@company.com"
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132347]/25 focus:border-[#132347]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-medium text-[#374151] mb-1">
                Company Size
              </label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#132347]/25 focus:border-[#132347]"
              >
                <option>1–49 employees</option>
                <option>50–250 employees</option>
                <option>251–1,000 employees</option>
                <option>1,000+ employees</option>
              </select>
            </div>
            {error && <p className="text-xs text-rose-600">{error}</p>}
            <button
              type="submit"
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg transition-colors cursor-pointer"
            >
              Schedule Demo
            </button>
          </form>
        </>
      )}
    </ModalBackdrop>
  );
};

export const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <ModalBackdrop
      isOpen={isOpen}
      onClose={() => {
        setSent(false);
        onClose();
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <MeridianLogo className="w-6 h-6" />
        <span className="font-bold text-[#111827]">Meridian</span>
      </div>
      <h3 className="text-xl font-bold text-[#111827] mb-1">
        Sign in to your workspace
      </h3>
      <p className="text-[13px] text-[#6B7280] mb-5">
        Use your corporate SSO or receive a secure sign-in link.
      </p>

      {sent ? (
        <div className="rounded-xl bg-[#EFF6FF] border border-[#93C5FD] p-4 text-sm text-[#132347]">
          Sign-in link dispatched to <span className="font-semibold">{email}</span>.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132347]/25 focus:border-[#132347]"
          />
          <button
            type="submit"
            className="w-full py-2.5 text-sm font-semibold text-white bg-[#132347] hover:bg-[#0D1935] rounded-lg transition-colors cursor-pointer"
          >
            Continue with SSO / Email
          </button>
        </form>
      )}
    </ModalBackdrop>
  );
};

export const IntegrationsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const filtered = ALL_INTEGRATIONS.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ModalBackdrop isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <h3 className="text-xl font-bold text-[#111827] mb-1">
        Meridian Integration Directory
      </h3>
      <p className="text-[13px] text-[#6B7280] mb-4">
        Connect your HRIS, messaging, project tracking, and identity stack.
      </p>

      <div className="relative mb-4">
        <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search integrations (Slack, Notion, Okta...)"
          className="w-full pl-9 pr-3.5 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#132347]/25 focus:border-[#132347]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-slate-200/80 p-3.5 hover:border-[#132347]/40 transition-colors"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-sm font-semibold text-[#111827]">
                {item.name}
              </span>
              <span className="text-[11px] font-medium text-[#2563EB]">
                {item.category}
              </span>
            </div>
            <p className="text-[12px] text-[#6B7280] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-8 text-sm text-[#6B7280]">
            No matching integrations found for &ldquo;{query}&rdquo;.
          </div>
        )}
      </div>
    </ModalBackdrop>
  );
};
