import React from "react";
import ThemeProvider from "./ThemeProvider";
import { useContext } from "react";
import { themeContext } from "./ThemeProvider";

const ContextExample = () => {
  const context = useContext(themeContext);

  return (
    <div>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <p className={context.theme}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        cum dicta soluta iste aperiam quos excepturi mollitia consectetur,
        exercitationem dolor, officiis autem illum ducimus! Aperiam repellat
        recusandae illum. Laudantium, dolore.
      </p>
    </div>
  );
};

export default ContextExample;
