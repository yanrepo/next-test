import css from './Layout.module.css';
import MainMenu from '../mainMenu/MainMenu';
import { BasketContextProvider } from '../basket/BasketContext';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <MainMenu />
      <BasketContextProvider>
        <div className={css.main}>{children}</div>
      </BasketContextProvider>
    </div>
  );
};

export default Layout;
