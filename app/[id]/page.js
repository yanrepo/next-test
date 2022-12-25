import supabase from '../../supabase';
import css from './css.module.css';
import Image from 'next/image';
import Link from 'next/link';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
import AddRemoveButton from '../../components/card/AddRemoveButton';

export default async function Item({ params }) {
  const {
    data: [item],
  } = await supabase.from('food').select('*').eq('id', params.id);

  return (
    <>
      <div className={css.box}>
        <Image
          src={item.type === 'food' ? imgFood : imgDrinks}
          width={500}
          height={500}
          alt="image"
        />
        <Link
          className={css.unsplash}
          href={
            item.type === 'food'
              ? 'https://unsplash.com/photos/oXULSch338E'
              : 'https://unsplash.com/photos/YY_BLeDfSSU'
          }
        >
          {item.type === 'food'
            ? 'Photo by Alexandra Tran @ unsplash'
            : 'Photo by Daniel Jankovic @ unsplash'}
        </Link>
        <AddRemoveButton i={item} />
        <div className={css.description}>
          <h5 className={css.title}>
            {item.title} - ${item.price}
          </h5>
          <p className={css.text}>{item.text}</p>
        </div>
      </div>
    </>
  );
}
