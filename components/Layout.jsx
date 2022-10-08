import NavBar from './navBar/NavBar';
import { BasketContextProvider } from './basket/BasketContext';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <BasketContextProvider>
        <div className="main">{children}</div>
      </BasketContextProvider>
    </div>
  );
};

export default Layout;
