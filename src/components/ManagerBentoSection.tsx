import React, { useState } from 'react';
import { CheckCircle2, Circle, TrendingUp } from 'lucide-react';
import { PORTRAITS } from '../data/assets';
import { AvatarImage } from './AvatarImage';

const OKR_ITEMS = [
  { id: 'uk', title: 'Increase Sales in UK by 12%', pct: 65 },
  { id: 'emea', title: 'Complete EMEA Sales Training', pct: 25 },
  { id: 'pricing-1', title: 'Complete Pricing Strategy Revamp', pct: 0 },
  { id: 'pricing-2', title: 'Complete Pricing Strategy Revamp', pct: 58 },
];

const DEPT_RESULTS = [
  { dept: 'Engineering', exceeds: 34, meets: 54, developing: 12 },
  { dept: 'Product', exceeds: 28, meets: 62, developing: 10 },
  { dept: 'People Ops', exceeds: 41, meets: 51, developing: 8 },
  { dept: 'Sales', exceeds: 26, meets: 58, developing: 16 },
];

export const ManagerBentoSection: React.FC = () => {
  const [groupBy, setGroupBy] = useState<'Department' | 'Level'>('Department');
  const [growTab, setGrowTab] = useState<'goals' | 'strengths'>('goals');
  const [checkedGoals, setCheckedGoals] = useState<Record<string, boolean>>({
    uk: true,
    emea: false,
    'pricing-1': false,
    'pricing-2': true,
  });

  const toggleGoal = (id: string) => {
    setCheckedGoals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="manager-bento" className="relative py-12 md:py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-5 md:px-8">
        {/* Top vertical connector stem + azure node */}
        <div className="flex flex-col items-center mb-0">
          <div className="w-px h-10 bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] ring-4 ring-[#3B82F6]/20 -mb-1.5 z-10" />
        </div>

        {/* Outer Bento Container */}
        <div className="rounded-[28px] bg-[#F4F6FA] border border-slate-200/70 p-6 sm:p-10 md:p-14">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <p className="text-[12px] font-semibold text-[#2563EB] tracking-wide mb-3">
              Improve Manager Productivity
            </p>
            <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#111827] mb-3.5">
              Empowered Managers, Higher Performing Teams
            </h2>
            <p className="text-[14.5px] md:text-[15.5px] text-[#6B7280] leading-relaxed">
              Make manager your highest point of leverage with productive meetings,
              clear expectations, and accountability.
            </p>
          </div>

          {/* Asymmetric 12-col Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Tall Card: OKRs & Goals (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200/80 p-6 md:p-7 flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              {/* Interactive Goals Mockup */}
              <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-4 mb-7">
                <div className="text-[11px] font-semibold text-[#6B7280] mb-3">
                  Goals
                </div>

                {/* Parent Goal Card */}
                <div className="rounded-lg bg-white border border-slate-200/80 p-3.5 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded-md bg-[#132347] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        G
                      </span>
                      <span className="text-[12px] font-semibold text-[#111827] truncate">
                        Increase International Revenue
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[11px] font-semibold text-[#374151] tabular-nums">
                        32%
                      </span>
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <AvatarImage
                          src={PORTRAITS.heroCenter}
                          alt="Goal owner"
                          className="w-full h-full object-cover"
                          fallbackInitials="GO"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Nested OKR checklist */}
                  <div className="space-y-2.5 pl-2 border-l border-slate-200">
                    {OKR_ITEMS.map((item) => {
                      const isDone = checkedGoals[item.id];
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleGoal(item.id)}
                          className="w-full flex items-center justify-between gap-2 text-left py-1 px-1.5 rounded hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {isDone ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            )}
                            <span className="text-[11px] text-[#374151] truncate">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-[#4B5563] tabular-nums shrink-0">
                            {isDone ? Math.max(item.pct, 65) : item.pct}%
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[22px] font-bold tracking-tight text-[#111827] mb-2">
                  OKRs &amp; Goals
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#6B7280]">
                  Focus individuals and teams on your company&apos;s top
                  priorities, tracking progress and risks each step of the way.
                </p>
              </div>
            </div>

            {/* Right 7 Columns */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Top Wide Card: Analytics */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-6 md:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                <div className="md:col-span-5">
                  <h3 className="text-[20px] font-bold tracking-tight text-[#111827] mb-2">
                    Analytics
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#6B7280]">
                    Seamlessly connect performance review cycle results into
                    compensation decisions, creating fair and equitable pay
                    outcomes.
                  </p>
                </div>

                {/* Analytics Chart Mockup */}
                <div className="md:col-span-7 rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="text-[12px] font-bold text-[#111827]">
                      Results
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setGroupBy(groupBy === 'Department' ? 'Level' : 'Department')
                      }
                      className="text-[10.5px] font-medium text-[#4B5563] bg-white border border-slate-200 rounded-md px-2 py-1 hover:border-slate-300 transition-colors cursor-pointer"
                    >
                      Group by: <span className="font-semibold text-[#111827]">{groupBy}</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {DEPT_RESULTS.map((row) => {
                      const shift = groupBy === 'Level' ? 6 : 0;
                      const exceeds = row.exceeds + shift;
                      const meets = row.meets - shift;
                      return (
                        <div key={row.dept} className="space-y-1">
                          <div className="flex items-center justify-between text-[10.5px] text-[#6B7280]">
                            <span>{groupBy === 'Department' ? row.dept : `L${DEPT_RESULTS.indexOf(row) + 3} Band`}</span>
                            <span className="tabular-nums font-medium text-[#374151]">
                              {exceeds}% Exceeds
                            </span>
                          </div>
                          <div className="h-3.5 w-full rounded-md overflow-hidden flex gap-0.5 bg-slate-100">
                            <div
                              style={{ width: `${exceeds}%` }}
                              className="bg-[#132347] transition-all duration-200"
                            />
                            <div
                              style={{ width: `${meets}%` }}
                              className="bg-[#4F7DF3] transition-all duration-200"
                            />
                            <div
                              style={{ width: `${row.developing}%` }}
                              className="bg-[#BFDBFE] transition-all duration-200"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom 2 Cards inside Right 7 cols */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1">
                {/* Grow Card */}
                <div className="md:col-span-7 rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
                  <div className="mb-5">
                    <h3 className="text-[20px] font-bold tracking-tight text-[#111827] mb-1.5">
                      Grow
                    </h3>
                    <p className="text-[13px] leading-relaxed text-[#6B7280]">
                      Increase growth and engagement with Meridian&apos;s
                      dynamic employee development tools.
                    </p>
                  </div>

                  {/* Employee Profile Mini Card */}
                  <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/70 p-3.5">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                        <AvatarImage
                          src={PORTRAITS.employee}
                          alt="Bethany Hale"
                          className="w-full h-full object-cover object-top"
                          fallbackInitials="BH"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[12px] font-bold text-[#111827] truncate">
                          Bethany Hale
                        </div>
                        <div className="text-[10.5px] text-[#6B7280]">
                          People Operations
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2.5">
                      <button
                        type="button"
                        onClick={() => setGrowTab('goals')}
                        className={`px-2.5 py-1 rounded text-[10.5px] font-semibold transition-colors cursor-pointer ${
                          growTab === 'goals'
                            ? 'bg-[#132347] text-white'
                            : 'bg-white text-[#6B7280] border border-slate-200'
                        }`}
                      >
                        Career Goals
                      </button>
                      <button
                        type="button"
                        onClick={() => setGrowTab('strengths')}
                        className={`px-2.5 py-1 rounded text-[10.5px] font-semibold transition-colors cursor-pointer ${
                          growTab === 'strengths'
                            ? 'bg-[#132347] text-white'
                            : 'bg-white text-[#6B7280] border border-slate-200'
                        }`}
                      >
                        Strengths
                      </button>
                    </div>

                    {growTab === 'goals' ? (
                      <div className="space-y-1.5 text-[11px] text-[#374151]">
                        <div className="bg-white rounded px-2.5 py-1.5 border border-slate-200/60">
                          Make our onboarding experience the best in the world
                        </div>
                        <div className="bg-white rounded px-2.5 py-1.5 border border-slate-200/60">
                          Build an internship program
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-[11px] text-[#374151]">
                        <div className="bg-white rounded px-2.5 py-1.5 border border-slate-200/60">
                          Cross-functional stakeholder coaching
                        </div>
                        <div className="bg-white rounded px-2.5 py-1.5 border border-slate-200/60">
                          Structured new-hire curriculum design
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Reduced Turnover 27% Deep Cobalt Card */}
                <div className="md:col-span-5 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F1E3E] via-[#172E5C] to-[#214282] p-6 text-white flex flex-col justify-between min-h-[240px]">
                  <div className="relative z-10">
                    <div className="text-[20px] font-bold tracking-tight leading-snug">
                      Reduced
                      <br />
                      Turnover{' '}
                      <span className="text-[#60A5FA] tabular-nums">27%</span>
                    </div>
                  </div>

                  {/* Isometric architectural line-art decoration */}
                  <div className="relative z-10 mt-6 flex items-end justify-end">
                    <svg
                      viewBox="0 0 180 120"
                      fill="none"
                      className="w-40 h-28 opacity-85"
                      aria-hidden="true"
                    >
                      <path
                        d="M90 12L152 46L90 80L28 46L90 12Z"
                        fill="#1B356B"
                        stroke="#60A5FA"
                        strokeOpacity="0.45"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M28 46V68L90 102L152 68V46"
                        fill="#0E1D3D"
                        stroke="#60A5FA"
                        strokeOpacity="0.35"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M90 80V102"
                        stroke="#60A5FA"
                        strokeOpacity="0.35"
                        strokeWidth="1.2"
                      />
                      <circle cx="90" cy="46" r="14" stroke="#60A5FA" strokeWidth="1.5" />
                      <path
                        d="M84 46L88 50L97 41"
                        stroke="#60A5FA"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10 flex items-center gap-1.5 text-[11px] text-[#BFDBFE]/85 font-medium">
                    <TrendingUp className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span className="tabular-nums">Annual retention uplift</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
