import css from './Main.module.css';
import useTheme from '../themes/themeContext';

const Main = ({ children }) => {
  const { theme } = useTheme();

  return (
    <main className={theme === true ? css.light : css.dark}>
      {children}
    </main>
  );
};

export default Main;
