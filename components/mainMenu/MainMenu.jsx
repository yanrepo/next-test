import Link from 'next/link';
import css from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <div className={css.conteiner}>
      <Link href={'/'}>
        <a className={css.aLink}>home</a>
      </Link>
      <Link href={'/food'}>
        <a className={css.aLink}>food</a>
      </Link>
      <Link href={'/drinks'}>
        <a className={css.aLink}>drinks</a>
      </Link>
      <Link href={'/basket'}>
        <a className={css.basketLink}>basket</a>
      </Link>
    </div>
  );
};

export default MainMenu;
