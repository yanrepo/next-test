import css from './Card.module.css';
import Image from 'next/image';
import lime from '../../public/lime.jpg';

const Card = (i) => {
  return (
    <div className={css.card} key={i.id}>
      <Image className={css.cardImg} src={lime} alt="lime-image" />
      <h5 className={css.cardTitle}>{i.title}</h5>
      <p className={css.cardText}>{i.text}</p>
      <div className={css.cardCounter}>/ COUNTER</div>
    </div>
  );
};

export default Card;
