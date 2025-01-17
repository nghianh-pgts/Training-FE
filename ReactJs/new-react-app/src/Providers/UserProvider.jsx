import React, { createContext } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const name = "Huu Nghia";

  return (
    <div>
      <userContext.Provider value={{ name }}>{children}</userContext.Provider>
    </div>
  );
};

export default UserProvider;
