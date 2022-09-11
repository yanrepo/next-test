import NavBar from './navBar/NavBar';
import { BasketContextProvider } from './basket/BasketContext';

//
//EMPTY DIV-WRAPPER FOR EMPTY FOOTER

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <NavBar />
        <BasketContextProvider>
          <div className="main">{children}</div>
        </BasketContextProvider>
        <footer />
      </div>
    </div>
  );
};

export default Layout;
