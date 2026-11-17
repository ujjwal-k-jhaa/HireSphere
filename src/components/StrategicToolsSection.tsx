import React, { useState } from 'react';
import {
  BarChart3,
  ChevronRight,
  Clock,
  Lock,
  TrendingUp,
  UserCheck,
  Check,
} from 'lucide-react';
import { PORTRAITS, STRATEGIC_TOOLS, StrategicTool } from '../data/assets';
import { AvatarImage } from './AvatarImage';

const TOOL_ICONS: Record<StrategicTool['id'], React.ReactNode> = {
  performance: <UserCheck className="w-4 h-4" />,
  'time-tracking': <Clock className="w-4 h-4" />,
  analytics: <BarChart3 className="w-4 h-4" />,
  grow: <TrendingUp className="w-4 h-4" />,
  security: <Lock className="w-4 h-4" />,
};

export const StrategicToolsSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<StrategicTool['id']>('performance');
  const [selfRating, setSelfRating] = useState<number>(3);
  const [managerRating, setManagerRating] = useState<number>(2);
  const [ptoApproved, setPtoApproved] = useState<boolean>(false);

  return (
    <section id="strategic-tools" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-5 md:px-8">
        {/* Heading */}
        <div className="text-center max-w-[540px] mx-auto mb-12">
          <p className="text-[12px] font-semibold text-[#2563EB] tracking-wide mb-2.5">
            Better Together
          </p>
          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#111827]">
            Every Tool You Need To Power Strategic HR
          </h2>
        </div>

        {/* Two-column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Accordion / Selector */}
          <div className="lg:col-span-5 space-y-1.5">
            {STRATEGIC_TOOLS.map((tool) => {
              const isActive = tool.id === activeTool;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => setActiveTool(tool.id)}
                  aria-expanded={isActive}
                  className={`w-full text-left rounded-xl px-5 py-4 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] ${
                    isActive
                      ? 'bg-[#F5F7FC] border border-slate-200/80 shadow-xs'
                      : 'hover:bg-slate-50/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`${
                          isActive ? 'text-[#132347]' : 'text-[#6B7280]'
                        }`}
                      >
                        {TOOL_ICONS[tool.id]}
                      </span>
                      <span
                        className={`text-[15px] font-semibold ${
                          isActive ? 'text-[#111827]' : 'text-[#4B5563]'
                        }`}
                      >
                        {tool.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-[#9CA3AF] transition-transform duration-150 ${
                        isActive ? 'rotate-90 text-[#132347]' : ''
                      }`}
                    />
                  </div>
                  {isActive && (
                    <p className="mt-2.5 pl-7 text-[13px] leading-relaxed text-[#6B7280]">
                      {tool.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Preview Frame with Soft Azure Glow */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] p-5 sm:p-8 bg-gradient-to-br from-[#E2ECFF] via-[#C6DCFE] to-[#EFF5FF] border border-[#93C5FD]/60 shadow-sm">
              {activeTool === 'performance' && (
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(19,35,71,0.06)]">
                  <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-1.5">
                    COMMUNICATION AND COLLABORATION
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#111827] leading-snug mb-6">
                    This person drives initiatives that enhance the productivity
                    of our team and company
                  </h3>

                  <div className="space-y-4">
                    {/* Self Rating Row */}
                    <div className="rounded-xl border border-slate-200/80 p-4">
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                          <AvatarImage
                            src={PORTRAITS.employee}
                            alt="Sabrina Carpenter"
                            className="w-full h-full object-cover object-top"
                            fallbackInitials="SC"
                          />
                        </div>
                        <span className="text-[13.5px] font-semibold text-[#111827]">
                          Sabrina Carpenter
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#132347] text-white tracking-wide">
                          SELF
                        </span>
                      </div>

                      <div className="grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setSelfRating(num)}
                            className={`h-8 rounded-md text-[12px] font-semibold tabular-nums transition-colors cursor-pointer ${
                              selfRating === num
                                ? 'bg-[#DBEAFE] text-[#1E40AF] border border-[#60A5FA]'
                                : 'bg-[#F8FAFC] text-[#6B7280] border border-slate-200/70 hover:bg-slate-100'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Manager Rating Row */}
                    <div className="rounded-xl border border-slate-200/80 p-4">
                      <div className="flex items-center gap-3 mb-3.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                          <AvatarImage
                            src={PORTRAITS.manager}
                            alt="Jesse Barbera"
                            className="w-full h-full object-cover object-top"
                            fallbackInitials="JB"
                          />
                        </div>
                        <span className="text-[13.5px] font-semibold text-[#111827]">
                          Jesse Barbera
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#132347] text-white tracking-wide">
                          MANAGER
                        </span>
                      </div>

                      <div className="grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setManagerRating(num)}
                            className={`h-8 rounded-md text-[12px] font-semibold tabular-nums transition-colors cursor-pointer ${
                              managerRating === num
                                ? 'bg-[#DBEAFE] text-[#1E40AF] border border-[#60A5FA]'
                                : 'bg-[#F8FAFC] text-[#6B7280] border border-slate-200/70 hover:bg-slate-100'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'time-tracking' && (
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(19,35,71,0.06)] space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                        ATTENDANCE &amp; TIME OFF
                      </div>
                      <h3 className="text-[17px] font-bold text-[#111827] mt-1">
                        Upcoming Team PTO Requests
                      </h3>
                    </div>
                    <span className="text-[12px] font-semibold text-[#132347] tabular-nums">
                      98.4% On-Time
                    </span>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[13.5px] font-semibold text-[#111827]">
                        Elena Rostova · Product Design
                      </div>
                      <div className="text-[12px] text-[#6B7280] tabular-nums mt-0.5">
                        Dec 18 – Dec 22 · 40 hrs Paid Time Off
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPtoApproved(!ptoApproved)}
                      className={`px-3.5 py-2 rounded-lg text-[12px] font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                        ptoApproved
                          ? 'bg-[#DBEAFE] text-[#1E40AF]'
                          : 'bg-[#132347] text-white hover:bg-[#0D1935]'
                      }`}
                    >
                      {ptoApproved && <Check className="w-3.5 h-3.5" />}
                      <span>{ptoApproved ? 'Approved' : 'Approve'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-[#F8FAFC] p-3 border border-slate-200/60">
                      <div className="text-[18px] font-bold text-[#111827] tabular-nums">
                        164h
                      </div>
                      <div className="text-[11px] text-[#6B7280]">Logged Cycle</div>
                    </div>
                    <div className="rounded-xl bg-[#F8FAFC] p-3 border border-slate-200/60">
                      <div className="text-[18px] font-bold text-[#2563EB] tabular-nums">
                        14d
                      </div>
                      <div className="text-[11px] text-[#6B7280]">PTO Balance</div>
                    </div>
                    <div className="rounded-xl bg-[#F8FAFC] p-3 border border-slate-200/60">
                      <div className="text-[18px] font-bold text-[#111827] tabular-nums">
                        Zero
                      </div>
                      <div className="text-[11px] text-[#6B7280]">Payroll Errors</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'analytics' && (
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(19,35,71,0.06)] space-y-5">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      EXECUTIVE WORKFORCE INSIGHTS
                    </div>
                    <h3 className="text-[17px] font-bold text-[#111827] mt-1">
                      Engagement &amp; Retention Pulse
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-4">
                      <div className="text-[12px] text-[#6B7280]">eNPS Score</div>
                      <div className="text-[28px] font-bold text-[#132347] tabular-nums mt-1">
                        +64
                      </div>
                      <div className="text-[11px] text-[#2563EB] font-medium mt-1">
                        +11 pts vs last quarter
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-4">
                      <div className="text-[12px] text-[#6B7280]">Pay Equity Ratio</div>
                      <div className="text-[28px] font-bold text-[#111827] tabular-nums mt-1">
                        99.6%
                      </div>
                      <div className="text-[11px] text-[#6B7280] mt-1">
                        Across 8 job levels
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTool === 'grow' && (
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(19,35,71,0.06)] space-y-4">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      COMPETENCY &amp; CAREER LADDERS
                    </div>
                    <h3 className="text-[17px] font-bold text-[#111827] mt-1">
                      Individual Growth Track · L4 → L5
                    </h3>
                  </div>
                  {[
                    { skill: 'Cross-Team Technical Leadership', pct: 85 },
                    { skill: 'Mentoring & Peer Coaching', pct: 92 },
                    { skill: 'Strategic Roadmap Ownership', pct: 70 },
                  ].map((item) => (
                    <div key={item.skill} className="space-y-1.5">
                      <div className="flex justify-between text-[12.5px]">
                        <span className="font-medium text-[#374151]">{item.skill}</span>
                        <span className="font-semibold text-[#132347] tabular-nums">{item.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          style={{ width: `${item.pct}%` }}
                          className="h-full bg-[#4F7DF3] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTool === 'security' && (
                <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(19,35,71,0.06)] space-y-4">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      ENTERPRISE TRUST &amp; GOVERNANCE
                    </div>
                    <h3 className="text-[17px] font-bold text-[#111827] mt-1">
                      Zero-Trust Compliance Controls
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'SOC 2 Type II Certified',
                      'GDPR & ISO 27001 Ready',
                      'SAML 2.0 / Okta SCIM Sync',
                      'Field-Level Compensation Encryption',
                    ].map((badge) => (
                      <div
                        key={badge}
                        className="flex items-center gap-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-3.5 text-[12.5px] font-medium text-[#111827]"
                      >
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
