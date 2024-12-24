import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const currentTheme = localStorage.getItem("theme") || "light";
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'night' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;
