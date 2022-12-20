import Link from 'next/link';
import css from './MainMenu.module.css';
import SwitchTheme from './SwitchTheme';

const MainMenu = () => {
  return (
    <div className={css.conteiner}>
      <Link className={css.aLink} href={'/'}>
        home
      </Link>
      <Link className={css.aLink} href={'/food'}>
        food
      </Link>
      <Link className={css.aLink} href={'/drinks'}>
        drinks
      </Link>
      <Link className={css.basketLink} href={'/basket'}>
        basket
      </Link>
      <SwitchTheme />
    </div>
  );
};

export default MainMenu;
