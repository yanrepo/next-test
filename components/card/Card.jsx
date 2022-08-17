import css from './Card.module.css';
import Image from 'next/image';
import img from '../../public/images/food-1920-1280.jpg';

const Card = (i) => {
  return (
    <div className={css.card} key={i.id}>
      <Image
        className={css.cardImg}
        src={img}
        layout="intrinsic"
        width={320}
        height={240}
        alt="image"
      />
      <h5 className={css.cardTitle}>{i.title}</h5>
      <p className={css.cardText}>{i.text}</p>
      <div className={css.cardCounter}>/ COUNTER</div>
    </div>
  );
};

export default Card;
