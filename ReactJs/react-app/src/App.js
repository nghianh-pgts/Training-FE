import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Content from "./components/Content";
import UseRef from "./components/UseRef";
import ContextExample from "./components/ContextExample";
import ReducerExample from "./components/ReducerExample";
function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <Content /> */}
      {/* <UseRef /> */}
      {/* <ContextExample /> */}
      <ReducerExample />
    </div>
  );
}

export default App;
