import css from './Card.module.css';
import Image from 'next/image';
import img from '../../public/images/alexandra-tran-unsplash.png';
import { Counter } from './counter/Counter';
import { useState, useContext } from 'react';
import BasketContext from '../../context/BasketContext';

const Card = (i) => {
  const [amount, setAmount] = useState(1);
  const { addToBasket } = useContext(BasketContext);

  return (
    <div
      className={css.card}
      key={i.id}
      onClick={() => addToBasket(i.title, i.price)}
    >
      <Image
        className={css.cardImg}
        src={img}
        layout="intrinsic"
        width={500}
        height={500}
        alt="image"
      />
      <h5 className={css.cardTitle}>{i.title}</h5>
      <p className={css.cardText}>{i.text}</p>
      <Counter
        price={i.price}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
};

export default Card;
