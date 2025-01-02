import React, { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("change theme");
    console.log(theme);

    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeValue = {
    theme,
    toggleTheme,
  };

  return (
    <themeContext.Provider value={themeValue}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
