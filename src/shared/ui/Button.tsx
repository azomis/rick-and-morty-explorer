import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({ children, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        relative inline-flex items-center justify-center px-6 py-3
        font-bold text-black uppercase tracking-widest
        bg-green-400 border-4 border-purple-700 rounded-xl
        shadow-[4px_4px_0px_0px_#000]
        hover:bg-green-300 hover:scale-105 active:scale-95
        transition-all duration-200 ease-out
        ${className || ''}
      `}
    >
      {children}
    </button>
  );
}
