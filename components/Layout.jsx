import SideBar from './navBar/SideBar';

//
//EMPTY DIV-WRAPPER FOR EMPTY FOOTER

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <SideBar />
        <div className="main">{children}</div>
        <footer />
      </div>
    </div>
  );
};

export default Layout;
