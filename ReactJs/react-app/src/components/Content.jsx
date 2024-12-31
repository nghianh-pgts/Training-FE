import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Content = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("users");
  const [showGoToTop, setShowGoToTop] = useState(false);

  const types = ["users", "posts", "comments"];

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    console.log(data);
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }

      console.log(window.scrollY);
      console.log(showGoToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); //cleanup event trước khi component unmount
    };
  }, []);

  return (
    <div>
      <table style={{ width: "100%", border: "1px solid black" }}>
        <tbody>
          <tr>
            <ul style={{ display: "flex", listStyle: "none" }}>
              {types.map((type) => (
                <li key={type}>
                  <button onClick={() => setType(type)}>{type}</button>
                </li>
              ))}
            </ul>
          </tr>
          {data.map((item) => (
            <tr key={item.id} style={{ border: "1px solid black" }}>
              <td>{item.name == null ? item.title : item.name}</td>
              <td>{item.email}</td>
              <td>{item.userId}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showGoToTop && (
        <button style={{ position: "fixed", bottom: "20", right: "20" }}>
          Go to top
        </button>
      )}
    </div>
  );
};

export default Content;
