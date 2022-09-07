import { createContext } from 'react';

const BasketContext = createContext();

export function BasketContextProvider({ children }) {
  return (
    <BasketContext.Provider value={{ item: 1 }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
