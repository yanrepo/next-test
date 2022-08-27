import css from './Counter.module.css';
import { useState } from 'react';

export const Counter = ({ price }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const countHandler = (e) => setCount(e.target.value);

  return (
    <div className={css.fooBox}>
      <p className={css.price}>{price}</p>
      <div className={css.counter}>
        <button className={css.button} onClick={decrement}>
          -
        </button>
        <input
          className={css.input}
          value={count}
          onChange={countHandler}
        />
        <button className={css.button} onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
