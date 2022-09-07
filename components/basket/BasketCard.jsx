import css from './BasketCard.module.css';
import { useContext } from 'react';
import BasketContext from '../../context/BasketContext';

const BasketCard = () => {
  const { items } = useContext(BasketContext);

  return (
    <div className={css.box}>
      <h1>Amount: {items.length}</h1>
      <ul>
        {items.map((i) => (
          <li key={i.title + i.price}>
            {i.title}: ${i.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
