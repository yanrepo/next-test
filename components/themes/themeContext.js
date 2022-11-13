import { createContext, useContext, useState } from 'react';

const initialState = true;

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);

  const toggleTheme = () => {
    setTheme(theme === true ? false : true);
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default useTheme;
