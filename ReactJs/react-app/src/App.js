import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Content from "./components/Content";
import UseRef from "./components/UseRef";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <Content /> */}
      <UseRef />
    </div>
  );
}

export default App;
