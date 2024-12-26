import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";


import ThemeContext from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "night";

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value={isDarkMode}
        onChange={toggleTheme}
      />

      {/* sun icon */}
      {isDarkMode ? <MdLightMode size={40} /> : <MdDarkMode size={40} />}

      {/* moon icon */}
    </label>
  );
};

export default ThemeToggle;
