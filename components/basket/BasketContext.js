import { createContext, useContext, useReducer } from 'react';
import basketReducer, { initialState } from './basketReducer';

const BasketContext = createContext(initialState);

export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  const addToBasket = (product) => {
    const newState = state.products.concat(product);
    dispatch({ type: 'ADD', payload: { products: newState } });
    updateTotal(newState);
  };

  const removeFromBasket = (product) => {
    const newState = state.products.filter(
      (current) => current.title !== product.title
    );
    dispatch({ type: 'REMOVE', payload: { products: newState } });
    updateTotal(newState);
  };

  const updateTotal = () => {
    let total = 0;
    state.products.forEach((product) => (total += product.price));
    dispatch({ type: 'TOTAL', payload: { total } });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
  };

  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  );
};

const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error('useBasket must be used within BasketContext');
  }
  return context;
};

export default useBasket;
