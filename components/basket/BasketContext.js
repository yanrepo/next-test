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

  const addToBasket = (i) => {
    const added = [];
    const existSome = state.products.some((product) =>
      product.id === i.id ? true : false
    );
    if (existSome)
      added = state.products.map((product) =>
        product.id === i.id
          ? { ...product, amount: product.amount + 1 }
          : product
      );
    else added = state.products.concat({ ...i });

    dispatch({ type: 'ADD', payload: { products: added } });
    updateTotal(added);
  };

  const removeFromBasket = (e) => {
    const added = state.products.filter(
      (product) => product.id !== parseInt(e.target.name, 10)
    );
    dispatch({ type: 'REMOVE', payload: { products: added } });
    updateTotal(added);
  };

  const increament = (e) => {
    const added = state.products.map((product) =>
      product.id === parseInt(e.target.name, 10)
        ? { ...product, amount: product.amount + 1 }
        : product
    );
    console.log(added);
    dispatch({ type: 'ADD', payload: { products: added } });
    updateTotal(added);
  };

  const decreament = (e) => {
    const added = state.products.map((product) =>
      product.id === parseInt(e.target.name, 10)
        ? {
            ...product,
            amount: product.amount > 0 ? product.amount - 1 : 0,
          }
        : product
    );
    console.log(added);
    dispatch({ type: 'ADD', payload: { products: added } });
    updateTotal(added);
  };

  const updateTotal = (added) => {
    const total = 0;
    added.map(
      (product) => (total += product.price * product.amount)
    );
    dispatch({ type: 'TOTAL', payload: { total } });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    increament,
    decreament,
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
