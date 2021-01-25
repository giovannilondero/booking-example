import { PropsWithChildren } from 'react';

export default function Center({ children }: PropsWithChildren<{}>) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
}
