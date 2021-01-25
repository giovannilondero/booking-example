import { PropsWithChildren } from 'react';

interface ButtonProps {
  className?:string;
}

export default function Button({ className = '', children }: PropsWithChildren<ButtonProps>) {
  return <button type="button" className={`bg-blue-500 text-white py-1 px-4 rounded ${className}`}>{children}</button>;
}
