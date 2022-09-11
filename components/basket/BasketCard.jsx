import css from './BasketCard.module.css';
import useBasket from './BasketContext';

const BasketCard = () => {
  const { total, products } = useBasket();

  return (
    <div className={css.box}>
      <h1>Amount: ${total}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.title}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasketCard;
