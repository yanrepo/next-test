import css from './Card.module.css';
import Image from 'next/image';

const Card = (i) => {
  return (
    <div className={css.card} key={i.id}>
      <Image
        className={css.cardImg}
        src={
          'https://images.unsplash.com/photo-1611671310207-2374ec7b1889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        }
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
