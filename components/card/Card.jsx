import css from './Card.module.css';
import Image from 'next/image';
import img from '../../public/images/alexandra-tran-unsplash.png';
import useBasket from '../basket/BasketContext';

const Card = (i) => {
  const { addToBasket } = useBasket();

  const handleClick = () => {
    const { title, price } = i;
    const product = { title, price };
    addToBasket(product);
  };

  return (
    <div className={css.card} key={i.id} onClick={handleClick}>
      <Image
        className={css.cardImg}
        src={img}
        layout="intrinsic"
        width={500}
        height={500}
        alt="image"
      />
      <h5 className={css.cardTitle}>
        {i.title} - ${i.price}
      </h5>
      <p className={css.cardText}>{i.text}</p>
    </div>
  );
};

export default Card;
