import SideBar from './navBar/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
