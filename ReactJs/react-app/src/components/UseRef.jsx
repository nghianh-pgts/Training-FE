import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

//lưu các giá trị của một tham chiếu bên ngoài
//function component

const UseRef = () => {
  const [count, setCount] = useState(60);

  const ref = useRef(99);
  console.log(ref.current);

  const timerId = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      ref.current = Math.random();
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {};
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default UseRef;
