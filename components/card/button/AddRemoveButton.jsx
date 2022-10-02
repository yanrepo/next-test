import useBasket from '../../basket/BasketContext';
import { useState, useEffect } from 'react';

const AddRemoveButton = ({ i }) => {
  const { products, addToBasket, removeFromBasket } = useBasket();
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    state ? removeFromBasket(e) : addToBasket(i);
  };

  useEffect(() => {
    products.some((product) => product.id === i.id)
      ? setState(true)
      : setState(false);
  }, [products]);

  return (
    <button name={i.id} onClick={handleClick}>
      {state ? 'Remove from basket' : 'Add to basket'}
    </button>
  );
};

export default AddRemoveButton;
