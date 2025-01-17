import React, { createContext, useState } from "react";
export const themeProvider = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <themeProvider.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeProvider.Provider>
  );
};

export default ThemeProvider;
