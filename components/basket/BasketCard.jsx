import css from './BasketCard.module.css';
import useBasket from './BasketContext';

const BasketCard = () => {
  const { total, products, removeFromBasket } = useBasket();

  console.log('basketCard products', products);

  return (
    <div className={css.box}>
      <h1>Amount: ${total}</h1>
      <ul className={css.ul}>
        {products.map((product) => (
          <li className={css.li} key={product.id}>
            <button
              className={css.remove}
              name={product.id}
              onClick={removeFromBasket}
            >
              X
            </button>
            {`${product.title}: x${product.amount} = $${product.price} `}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
