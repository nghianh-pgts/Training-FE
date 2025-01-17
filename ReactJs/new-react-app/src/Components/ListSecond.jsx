import React, { useContext } from "react";
import { userContext } from "../Providers/UserProvider";

const ListSecond = () => {
  const { name } = useContext(userContext);

  return <div>ListSecond {name}</div>;
};

export default ListSecond;
