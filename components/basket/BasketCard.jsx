import css from './BasketCard.module.css';
import useBasket from './BasketContext';

const BasketCard = () => {
  const {
    total,
    products,
    removeFromBasket,
    increament,
    decreament,
  } = useBasket();

  const inc = (e) => {
    e.preventDefault();
    increament(e);
  };
  const dec = (e) => {
    e.preventDefault();
    decreament(e);
  };

  return (
    <div className={css.box}>
      <h1 className={css.h1}>Amount: ${total}</h1>
      <ul className={css.ul}>
        {products.map((i) => (
          <li className={css.li} key={i.id}>
            <button
              className={css.remove}
              name={i.id}
              onClick={(e) => removeFromBasket(e)}
            >
              X
            </button>
            {`${i.title}: x${i.amount} = $${i.price} `}
            <div className={css.buttons}>
              <button name={i.id} onClick={dec} children="-" />
              <button name={i.id} onClick={inc} children="+" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
