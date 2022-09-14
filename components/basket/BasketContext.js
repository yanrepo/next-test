import { createContext, useContext, useReducer } from 'react';

const initialState = { total: 0, products: [] };

const basketReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return { ...state, products: payload.products };
    case 'REMOVE':
      return { ...state, products: payload.products };
    case 'TOTAL':
      return { ...state, total: payload.total };
    default:
      throw new Error(`${type} type not exist.`);
  }
};

const BasketContext = createContext(initialState);

export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  const addToBasket = (product) => {
    const newState = state.products.concat({
      id: state.products.length,
      title: product.title,
      price: product.price,
    });
    dispatch({ type: 'ADD', payload: { products: newState } });
    updateTotal(newState);
  };

  const removeFromBasket = (e) => {
    const newState = state.products.filter(
      (current) => current.id !== parseInt(e.target.name, 10)
    );
    dispatch({ type: 'REMOVE', payload: { products: newState } });
    updateTotal(newState);
  };

  const updateTotal = (newState) => {
    const total = 0;
    newState.forEach((product) => (total += product.price));
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
