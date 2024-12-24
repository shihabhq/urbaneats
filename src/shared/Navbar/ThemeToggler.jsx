import { useContext } from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import ThemeContext from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value={theme}
        onChange={toggleTheme}
      />

      {/* sun icon */}
      <div className="swap-on h-10 w-10 fill-current">
        <MdLightMode size={40} />
      </div>

      {/* moon icon */}
      <div className="swap-off h-10 w-10 fill-current">
        <MdDarkMode size={40} />
      </div>
    </label>
  );
};

export default ThemeToggle;
