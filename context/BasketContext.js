import { createContext, useState } from 'react';

const BasketContext = createContext();

export function BasketContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToBasket = (title, price) => {
    setItems((items) => [...items, { title, price }]);
  };

  return (
    <BasketContext.Provider value={{ items, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
