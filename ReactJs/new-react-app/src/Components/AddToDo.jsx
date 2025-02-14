import React, { useState } from "react";
import { addToDo } from "../redux/actions";
import { useDispatch } from "react-redux";

const AddToDo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddToDo;
