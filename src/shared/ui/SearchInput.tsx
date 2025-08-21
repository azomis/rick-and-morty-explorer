import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function SearchInput({ label, className, ...props }: SearchInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="font-bold text-purple-700 text-sm uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="search"
          {...props}
          className={`
            w-full pl-12 pr-4 py-2
            bg-yellow-100 border-4 border-green-400 rounded-lg
            font-semibold text-black placeholder:text-gray-600
            focus:outline-none focus:ring-4 focus:ring-purple-500
            shadow-[3px_3px_0px_0px_#000]
            ${className || ''}
          `}
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-700"
          size={20}
        />
      </div>
    </div>
  );
}
