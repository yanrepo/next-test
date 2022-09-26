import css from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
//import useBasket from '../basket/BasketContext';

const Card = ({ i }) => {
  //const { toggleBasket } = useBasket();
  const { id, type, title, price, text } = i;

  return (
    <Link href={`/${id}`} key={id}>
      <a className={css.card}>
        <Image
          className={css.cardImg}
          src={type === 'food' ? imgFood : imgDrinks}
          layout="intrinsic"
          width={500}
          height={500}
          alt="image"
        />
        <h5 className={css.cardTitle}>
          {title} - ${price}
        </h5>
        <p className={css.cardText}>{text}</p>
      </a>
    </Link>
  );
};

export default Card;
