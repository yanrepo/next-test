import SideBar from './navBar/NavBar';

//
//EMPTY DIV-WRAPPER FOR EMPTY FOOTER

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <NavBar />
        <div className="main">{children}</div>
        <footer />
      </div>
    </div>
  );
};

export default Layout;
