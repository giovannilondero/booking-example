import { PropsWithChildren } from 'react';

export default function Center({ children }: PropsWithChildren<{}>) {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div>{children}</div>
    </div>
  );
}
