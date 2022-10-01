import css from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
import useBasket from '../basket/BasketContext';

const Card = ({ i }) => {
  const { addToBasket } = useBasket();
  const handleClick = (e) => {
    e.preventDefault();
    addToBasket(i);
  };

  return (
    <div className={css.card}>
      <Link href={`/${i.id}`}>
        <a className={css.a}>
          <Image
            className={css.cardImg}
            src={i.type === 'food' ? imgFood : imgDrinks}
            layout="intrinsic"
            width={500}
            height={500}
            alt="image"
          />
        </a>
      </Link>
      <h5 className={css.cardTitle}>
        {i.title} - ${i.price}
      </h5>
      <button onClick={handleClick}>Add to basket</button>
    </div>
  );
};

export default Card;
