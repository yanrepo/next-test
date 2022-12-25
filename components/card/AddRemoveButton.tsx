'use client';

import useBasket from '../basket/basketContext';
import { useState, useEffect } from 'react';

const AddRemoveButton = ({ i }) => {
  const { products, addCardToBasket, removeFromBasket } = useBasket();
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    state ? removeFromBasket(e) : addCardToBasket(i);
  };

  useEffect(() => {
    products.some((product) => product.id === i.id)
      ? setState(true)
      : setState(false);
  }, [products, i.id]);

  return (
    <button
      style={{ height: '2rem', width: '100%' }}
      name={i.id}
      onClick={handleClick}
    >
      {state ? 'Remove' : 'Add to basket'}
    </button>
  );
};

export default AddRemoveButton;
