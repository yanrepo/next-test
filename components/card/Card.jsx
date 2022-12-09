import css from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
import AddRemoveButton from './button/AddRemoveButton';

const Card = ({ i }) => {
  return (
    <div className={css.card}>
      <Link href={`/${i.id}`}>
        <a className={css.a}>
          <Image
            src={i.type === 'food' ? imgFood : imgDrinks}
            layout="intrinsic"
            width={500}
            height={500}
            alt="image"
          />
        </a>
      </Link>
      <Link
        href={
          i.type === 'food'
            ? 'https://unsplash.com/photos/oXULSch338E'
            : 'https://unsplash.com/photos/YY_BLeDfSSU'
        }
      >
        <a className={css.unsplash}>
          {i.type === 'food'
            ? 'Photo by Alexandra Tran @ unsplash'
            : 'Photo by Daniel Jankovic @ unsplash'}
        </a>
      </Link>
      <h5 className={css.cardTitle}>
        {i.title} - ${i.price}
      </h5>
      <AddRemoveButton i={i} />
    </div>
  );
};

export default Card;
