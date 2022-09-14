import css from './BasketCard.module.css';
import useBasket from './BasketContext';

const BasketCard = () => {
  const { total, products, removeFromBasket } = useBasket();

  return (
    <div className={css.box}>
      <h1>Amount: ${total}</h1>
      <ul className={css.ul}>
        {products.map((product) => (
          <li className={css.li} key={product.id}>
            <button
              className={css.remove}
              onClick={removeFromBasket}
              name={product.id}
            >
              X
            </button>
            {product.title}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
