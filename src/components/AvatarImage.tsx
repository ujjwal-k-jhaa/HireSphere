import React, { useState } from 'react';
import { User } from 'lucide-react';

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackInitials?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  src,
  alt,
  className = '',
  fallbackInitials,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] text-[#132347] font-semibold ${className}`}
        aria-label={alt}
      >
        {fallbackInitials ? (
          <span className="text-sm tracking-tight">{fallbackInitials}</span>
        ) : (
          <User className="w-5 h-5 opacity-70" />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
