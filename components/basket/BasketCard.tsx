'use client';

import css from './BasketCard.module.css';
import useBasket from './basketContext';
import Link from 'next/link';
import Image from 'next/legacy/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';

const BasketCard = () => {
  const { total, products, removeFromBasket, increament, decreament } =
    useBasket();

  const inc = (e) => {
    e.preventDefault();
    increament(e);
  };
  const dec = (e) => {
    e.preventDefault();
    decreament(e);
  };

  return (
    <div className={css.box}>
      {total === 0 && (
        <Link className={css.a} href={'/food'}>
          Get some Food!
        </Link>
      )}
      {total > 0 && <h2 className={css.title}>the total amount: ${total}</h2>}
      {!products[0] ? null : (
        <ul className={css.ul}>
          {products.map((i) => (
            <li className={css.li} key={i.id}>
              <button
                className={css.remove}
                name={i.id}
                onClick={(e) => removeFromBasket(e)}
              >
                X
              </button>
              <Image
                src={i.type === 'food' ? imgFood : imgDrinks}
                width={30}
                height={30}
                alt="image"
              />
              {`${i.title}: x${i.amount} = $${i.price} `}
              <div className={css.buttons}>
                <button name={i.id} onClick={dec}>
                  -
                </button>
                <button name={i.id} onClick={inc}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketCard;
