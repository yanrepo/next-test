import useTheme from '../../context/themeContext';

const SwitchTheme = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={() => toggleTheme()}>
      {theme === true ? 'dark' : 'light'}
    </button>
  );
};

export default SwitchTheme;
