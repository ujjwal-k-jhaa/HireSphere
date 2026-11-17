import React, { useState } from 'react';
import { WORKPLACE_ROLES, WorkplaceRole } from '../data/assets';
import { AvatarImage } from './AvatarImage';
import { DropboxMark } from './Icons';

export const WorkplaceRolesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<WorkplaceRole['id']>('hr-leaders');

  return (
    <section id="workplace-roles" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-[540px] mx-auto mb-12">
          <p className="text-[12px] font-semibold text-[#2563EB] tracking-wide mb-2.5">
            Success Experience
          </p>
          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-bold tracking-[-0.025em] leading-[1.12] text-[#111827]">
            Built To Power Your Entire Workplace
          </h2>
        </div>

        {/* 4 Interactive Role Cards */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {WORKPLACE_ROLES.map((role) => {
            const isActive = role.id === activeId;
            return (
              <div
                key={role.id}
                className={`flex flex-col transition-all duration-300 ${
                  isActive ? 'lg:flex-[2.6]' : 'lg:flex-[0.85]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(role.id)}
                  aria-expanded={isActive}
                  className={`group text-left rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#132347] ${
                    isActive
                      ? 'bg-[#0F1E3E] text-white p-5 sm:p-6 shadow-md min-h-[340px] lg:h-[360px] flex flex-col sm:flex-row gap-5'
                      : 'bg-[#F3F5F9] hover:bg-[#E5E9F2] h-[260px] lg:h-[360px] relative'
                  }`}
                >
                  {isActive ? (
                    <>
                      {/* Active Portrait */}
                      <div className="w-full sm:w-[44%] h-[200px] sm:h-full rounded-xl overflow-hidden shrink-0 bg-[#132347]">
                        <AvatarImage
                          src={role.image}
                          alt={role.author}
                          className="w-full h-full object-cover object-top"
                          fallbackInitials={role.label.slice(0, 2)}
                        />
                      </div>

                      {/* Quote & Attribution */}
                      <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                        <p className="text-[13.5px] sm:text-[14px] leading-[1.58] text-white/95 font-normal">
                          {role.quote}
                        </p>

                        <div className="mt-5 pt-3 border-t border-white/10">
                          {role.company === 'Dropbox' ? (
                            <DropboxMark className="w-7 h-7 mb-2.5" />
                          ) : (
                            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#60A5FA] mb-1.5">
                              {role.company}
                            </span>
                          )}
                          <div className="text-[13px] font-semibold text-white">
                            {role.author}
                          </div>
                          <div className="text-[11.5px] text-white/70">
                            {role.authorTitle}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Collapsed Portrait Card */
                    <div className="w-full h-full relative">
                      <AvatarImage
                        src={role.image}
                        alt={role.label}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                        fallbackInitials={role.label.slice(0, 2)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </div>
                  )}
                </button>

                {/* Role Label & Summary below card */}
                <div className="mt-3 px-0.5">
                  <div
                    className={`text-[13px] font-semibold ${
                      isActive ? 'text-[#111827]' : 'text-[#4B5563]'
                    }`}
                  >
                    {role.label}
                  </div>
                  {isActive && (
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#6B7280] max-w-[440px]">
                      {role.summary}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
