import { createContext, PropsWithChildren, useContext } from 'react';

const BookingContext = createContext({});

export function BookingWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <BookingContext.Provider value={{}}>{children}</BookingContext.Provider>
  );
}

export function useBookingContext() {
  return useContext(BookingContext);
}
