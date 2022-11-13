import css from './Layout.module.css';
import MainMenu from '../mainMenu/MainMenu';
import Main from '../mainTag/Main';
import { BasketContextProvider } from '../basket/BasketContext';
import { ThemeContextProvider } from '../themes/themeContext';

const Layout = ({ children }) => {
  return (
    <BasketContextProvider>
      <ThemeContextProvider>
        <div className={css.layout}>
          <MainMenu />
          <Main>{children}</Main>
        </div>
      </ThemeContextProvider>
    </BasketContextProvider>
  );
};

export default Layout;
