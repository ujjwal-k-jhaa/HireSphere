import React from 'react';

export const MeridianLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
    <rect x="2" y="2" width="24" height="24" rx="7" fill="#132347" />
    <path
      d="M7.5 19V9.5L14 15.2L20.5 9.5V19"
      stroke="#60A5FA"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="9.2" r="1.6" fill="#93C5FD" />
  </svg>
);

export const G2BadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="#E5E7EB" />
    <path
      d="M10 5.4A4.6 4.6 0 1 0 14.4 11.4H10.6V9.6H16.2V10A6.2 6.2 0 1 1 10 3.8C11.6 3.8 13.05 4.42 14.15 5.42L12.85 6.72A4.42 4.42 0 0 0 10 5.4Z"
      fill="#6B7280"
    />
  </svg>
);

export const CapterraBadgeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="#E5E7EB" />
    <path d="M5.2 9.8L14.2 6L11.4 15L9.4 11.4L5.2 9.8Z" fill="#6B7280" />
  </svg>
);

export const DropboxMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="6" fill="#0061FF" />
    <path
      d="M11.2 8.5L6.5 11.5L11.2 14.5L16 11.5L11.2 8.5ZM20.8 8.5L16 11.5L20.8 14.5L25.5 11.5L20.8 8.5ZM6.5 17.5L11.2 20.5L16 17.5L11.2 14.5L6.5 17.5ZM20.8 14.5L16 17.5L20.8 20.5L25.5 17.5L20.8 14.5ZM16 18.6L11.2 21.6L16 24.5L20.8 21.6L16 18.6Z"
      fill="#FFFFFF"
    />
  </svg>
);

/* Isometric 3D Floating Line-Art Tiles for Hero (Cobalt & Sky Blue) */
export const IsoEnvelopeCube: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 88 88" fill="none" className={className} aria-hidden="true">
    <path d="M44 18L72 34V54L44 70L16 54V34L44 18Z" fill="#EFF6FF" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M16 34L44 50L72 34" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M44 50V70" stroke="#132347" strokeWidth="1.2" />
    <path d="M27 29L44 39L61 29" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IsoDocCube: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 88 88" fill="none" className={className} aria-hidden="true">
    <path d="M44 20L72 36L44 52L16 36L44 20Z" fill="#EFF6FF" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M16 36V44L44 60L72 44V36" fill="#DBEAFE" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="44" cy="36" r="6" stroke="#3B82F6" strokeWidth="1.4" />
    <path d="M44 32.5V36L46.5 37.5" stroke="#132347" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const IsoBookCube: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
    <path d="M48 24L80 42L48 60L16 42L48 24Z" fill="#F5F8FF" stroke="#132347" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M16 42V50L48 68L80 50V42" fill="#DBEAFE" stroke="#132347" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M48 60V68" stroke="#132347" strokeWidth="1.3" />
    <path d="M38 40L45 44L58 36" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IsoTeamCube: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 88 88" fill="none" className={className} aria-hidden="true">
    <path d="M44 16L68 30V54L44 68L20 54V30L44 16Z" fill="#F5F8FF" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M20 30L44 44L68 30" stroke="#132347" strokeWidth="1.2" />
    <path d="M44 44V68" stroke="#132347" strokeWidth="1.2" />
    <circle cx="34" cy="50" r="3" fill="#3B82F6" />
    <circle cx="54" cy="48" r="3" fill="#132347" fillOpacity="0.25" />
  </svg>
);

export const IsoTargetTile: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 88 88" fill="none" className={className} aria-hidden="true">
    <path d="M44 22L72 38L44 54L16 38L44 22Z" fill="#EFF6FF" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M16 38V45L44 61L72 45V38" fill="#DBEAFE" stroke="#132347" strokeWidth="1.2" strokeLinejoin="round" />
    <ellipse cx="44" cy="38" rx="9" ry="5" stroke="#3B82F6" strokeWidth="1.4" />
    <circle cx="44" cy="38" r="2" fill="#132347" />
  </svg>
);

export const IsoRocketTile: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
    <path d="M48 24L80 42L48 60L16 42L48 24Z" fill="#F5F8FF" stroke="#132347" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M16 42V50L48 68L80 50V42" fill="#BFDBFE" stroke="#132347" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M48 28L56 36L48 44L40 36L48 28Z" fill="#FFFFFF" stroke="#132347" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="48" cy="36" r="2" fill="#3B82F6" />
  </svg>
);

/* Partner Monochrome Wordmarks */
export const PartnerLogos: React.FC = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 text-[#9CA3AF]">
    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
      <svg viewBox="0 0 24 18" fill="currentColor" className="w-5 h-4">
        <path d="M18.6 2L14.5 11.2L12.7 4.7C11.4 4.7 10.2 5.6 9.7 7L7.5 12.2L6.8 6.4C6.6 5.1 5.5 4.2 4.2 4.2H1L4.6 16H8L10.9 9.4L12.5 16H16L22.5 2H18.6Z" />
      </svg>
      <span className="font-bold tracking-tight text-lg">Webflow</span>
    </div>

    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
      <svg viewBox="0 0 24 20" fill="currentColor" className="w-5 h-4">
        <path d="M19.8 2.8A16.5 16.5 0 0 0 15.7 1.5L15.2 2.5A15.2 15.2 0 0 0 8.8 2.5L8.3 1.5A16.5 16.5 0 0 0 4.2 2.8C1.6 6.7.9 10.5 1.2 14.3A16.6 16.6 0 0 0 6.2 16.8L7 15.6A10.7 10.7 0 0 1 5.2 14.7L5.6 14.4C9.5 16.2 14.5 16.2 18.4 14.4L18.8 14.7A10.7 10.7 0 0 1 17 15.6L17.8 16.8A16.6 16.6 0 0 0 22.8 14.3C23.2 9.9 22.1 6.1 19.8 2.8ZM8.8 12C7.8 12 7 11.1 7 10C7 8.9 7.8 8 8.8 8C9.8 8 10.6 8.9 10.6 10C10.6 11.1 9.8 12 8.8 12ZM15.2 12C14.2 12 13.4 11.1 13.4 10C13.4 8.9 14.2 8 15.2 8C16.2 8 17 8.9 17 10C17 11.1 16.2 12 15.2 12Z" />
      </svg>
      <span className="font-bold tracking-tight text-base">Discord</span>
    </div>

    <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
      <span className="font-extrabold tracking-tight text-xl lowercase">duolingo</span>
    </div>

    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <circle cx="10" cy="5.5" r="3" />
        <circle cx="5.5" cy="13.5" r="3" />
        <circle cx="14.5" cy="13.5" r="3" />
      </svg>
      <span className="font-semibold tracking-tight text-lg lowercase">asana</span>
    </div>

    <div className="flex items-center gap-0.5 opacity-80 hover:opacity-100 transition-opacity">
      <span className="font-bold tracking-tight text-lg">Linked</span>
      <span className="inline-flex items-center justify-center bg-[#9CA3AF] text-white font-bold text-xs w-5 h-5 rounded-sm">
        in
      </span>
    </div>

    <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
      <span className="font-extrabold tracking-tight text-lg lowercase">indeed</span>
    </div>

    <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
      <span className="font-bold tracking-tight text-lg lowercase">zoom</span>
    </div>
  </div>
);
