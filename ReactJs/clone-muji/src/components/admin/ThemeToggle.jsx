import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdBrightness4, MdBrightness7 } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <IconButton
      onClick={() => setDarkMode(!darkMode)}
      className="text-gray-600 dark:text-gray-300"
    >
      {darkMode ? <MdBrightness7 /> : <MdBrightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
