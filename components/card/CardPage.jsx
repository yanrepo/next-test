import css from './Card.module.css';
import Image from 'next/image';
import imgFood from '../../public/images/alexandra-tran-unsplash.png';
import imgDrinks from '../../public/images/daniel-jankovic-unsplash.png';
import AddRemoveButton from './button/AddRemoveButton';

const CardPage = ({ i }) => {
  return (
    <div className={css.card}>
      <Image
        className={css.cardImg}
        src={i.type === 'food' ? imgFood : imgDrinks}
        layout="intrinsic"
        width={500}
        height={500}
        alt="image"
      />
      <h5 className={css.cardTitle}>
        {i.title} - ${i.price}
      </h5>
      <AddRemoveButton i={i} />
    </div>
  );
};

export default CardPage;
