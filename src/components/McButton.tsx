import React from 'react';

interface McButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const baseClass =
  'flex items-center justify-center gap-4 bg-[#fffbe4] text-[#2c2c2c] text-xl font-bold px-4 py-5 rounded-xl border-[3px] border-[#62b453] cursor-pointer no-underline transition-all duration-200 shadow-md select-none hover:bg-[#e0ffcc] hover:shadow-lg sm:text-base sm:px-2.5 sm:py-3.5';

const McButton: React.FC<McButtonProps> = ({ icon, children, href, onClick, type = 'button', className = '' }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className}`}
      >
        {icon && <span className="w-8 h-8 inline-block">{icon}</span>}
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${baseClass} ${className}`}>
      {icon && <span className="w-8 h-8 inline-block">{icon}</span>}
      {children}
    </button>
  );
};

export default McButton;
