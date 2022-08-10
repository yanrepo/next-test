import css from './Card.module.css';
import Image from 'next/image';
import lime from '../../public/lime.jpg';

const Card = () => {
  return (
    <div className={css.card}>
      <Image className={css.cardImg} src={lime} alt="lime-image" />
      <h5 className={css.cardTitle}>Card title</h5>
      <p className={css.cardText}>
        {`Some quick example text to build on the card title and make
        up the bulk of the card's content. Some quick example text to
        build on the card title and make up the bulk of the card's
        content.`}
      </p>
      <div className={css.cardCounter}>/ COUNTER</div>
    </div>
  );
};

export default Card;
