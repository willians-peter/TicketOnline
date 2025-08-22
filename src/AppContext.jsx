import { createContext, useState, useEffect } from "react";

const LIGHT = "light";
const DARK = "dark";

export const AppContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : LIGHT;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};