import css from './Counter.module.css';

export const Counter = (props) => {
  const { price, amount, setAmount } = props;

  const increment = () =>
    !amount ? setAmount(1) : setAmount(+amount + 1);
  const decrement = () =>
    !amount ? setAmount(1) : amount > 1 && setAmount(amount - 1);
  const countHandler = (e) => setAmount(e.target.value);

  return (
    <div className={css.fooBox}>
      <div className={css.price}>${price}</div>
      <div className={css.counter}>
        <button className={css.button} onClick={decrement}>
          -
        </button>
        <input
          className={css.input}
          value={amount}
          onChange={countHandler}
        />
        <button className={css.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
