import React, { useContext } from "react";
import { userContext } from "../Providers/UserProvider";

const Header = () => {
  const { name } = useContext(userContext);
  return (
    <>
      <div>
        <h1>Hello {name}</h1>
      </div>
    </>
  );
};

export default Header;
