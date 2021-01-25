import { PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  onClick,
  className = '',
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-blue-500 text-white py-1 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
