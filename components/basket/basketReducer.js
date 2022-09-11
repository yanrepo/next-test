export const initialState = {
  total: 0,
  products: [],
};

const basketReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      console.log('ADD', payload);
      return { ...state, products: payload.products };
    case 'REMOVE':
      console.log('REMOVE', payload);
      return { ...state, products: payload.products };
    case 'TOTAL':
      console.log('TOTAL', payload);
      return { ...state, total: payload.total };
    default:
      throw new Error(`${type} type not exist.`);
  }
};

export default basketReducer;
