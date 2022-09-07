import css from './BasketCard.module.css';
import { useContext } from 'react';
import BasketContext from '../../context/BasketContext';

const BasketCard = () => {
  const { item } = useContext(BasketContext);

  return <div className={css.box}>{item}</div>;
};

export default BasketCard;
