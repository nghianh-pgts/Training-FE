import React, { useContext, useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import { themeProvider } from "../Providers/ThemeProvider";
import { userContext } from "../Providers/UserProvider";

const List = () => {
  const [users, setUsers] = useState([]);
  const { theme, toggleTheme } = useContext(themeProvider);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const { name } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      inputRef.current.focus();
      setUsers(data);
    };

    fetchData();
  }, []);

  const tableStyle = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterUsers = users.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterUsers);
  console.log(name);

  return (
    <div>
      <button onClick={toggleTheme}>{theme}</button>
      <input type="text" onChange={handleChange} ref={inputRef} />
      <Table striped bordered hover style={tableStyle}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>street</th>
            <th>city</th>

            <th>phone</th>
            <th>company name</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers &&
            filterUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
