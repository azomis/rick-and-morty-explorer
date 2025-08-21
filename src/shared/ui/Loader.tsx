interface LoaderProps {
  text?: string;
  className?: string;
}

export function Loader({ text = 'Loading...', className = '' }: LoaderProps) {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="text-gray-600">{text}</span>
      </div>
    </div>
  );
}
