import css from './Card.module.css';
import Link from 'next/link';
import Image from 'next/legacy/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
import AddRemoveButton from './AddRemoveButton';

const Card = ({ i }) => {
  return (
    <div className={css.card}>
      <Link className={css.a} href={`/${i.id}`}>
        <Image
          src={i.type === 'food' ? imgFood : imgDrinks}
          layout="intrinsic"
          width={640}
          height={640}
          alt="image"
        />
      </Link>
      <Link
        className={css.unsplash}
        href={
          i.type === 'food'
            ? 'https://unsplash.com/photos/oXULSch338E'
            : 'https://unsplash.com/photos/YY_BLeDfSSU'
        }
      >
        {i.type === 'food'
          ? 'Photo by Alexandra Tran @ unsplash'
          : 'Photo by Daniel Jankovic @ unsplash'}
      </Link>
      <h5 className={css.cardTitle}>
        {i.title} - ${i.price}
      </h5>
      <AddRemoveButton i={i} />
    </div>
  );
};

export default Card;
