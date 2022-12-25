import Link from 'next/link';
import css from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <div className={css.container}>
      <Link className={css.basketLink} href={'/'}>
        basket
      </Link>
      <Link className={css.aLink} href={'/food'}>
        food
      </Link>
    </div>
  );
};

export default MainMenu;
