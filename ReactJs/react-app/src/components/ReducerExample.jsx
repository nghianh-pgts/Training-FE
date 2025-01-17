import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
      break;
    case "GIAM":
      return state - 1;
      break;
    case "XOA_TAT_CA":
      return 0;
      break;
    default:
      return state;
      break;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.value;
    default:
      return state;
  }
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

const reducerUser = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state, // giữ nguyên state cũ
        loading: true, //field muốn ghi đè
      };
    case "GET_USER_SUCCESS":
      return {
        ...state, // giữ nguyên state cũ
        loading: false, //field muốn ghi đè
        data: action.data,
      };

    case "GET_USER_ERROR":
      async;
      return {
        ...state, // giữ nguyên state cũ
        data: [], //field muốn ghi đè
        error: action.data,
      };

    default:
      return state;
  }
};

const getUsers = async () => {
  // usersDispatch({ type: "GET_USER_REQUEST" });

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Something went wrong");
    usersDispatch({ type: "GET_USER_ERROR", data: "Something went wrong" });
  }

  const data = await response.json();
  usersDispatch({ type: "GET_USER_SUCCESS", data: data });

  return data;
};

const ReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, dispatchUser] = useReducer(reducerUser, initState);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch("TANG")}>Tăng</button>
      <button onClick={() => dispatch("GIAM")}>Giảm</button>
      <button onClick={() => dispatch("XOA_TAT_CA")}>Xóa tất cả</button>

      <h1>{count2}</h1>
      <button
        onClick={() =>
          dispatch2({
            type: "SET",
            value: 10,
          })
        }
      >
        Gán giá trị
      </button>

      <button onClick={getUsers}>GET USER</button>
      {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
    </>
  );
};

export default ReducerExample;

/**
 * ACTION 'ADD_NEW_ITEM'
 * VIEW: nhấn len nút "Add new item" => dispatch('ADD_NEW_ITEM')
 *
 * REDUCER:  là một function (state, action) =>{
 * switch(action){
 * case 'ADD_NEW_ITEM':
 *   //logic
 *    return newState
 * case 'DELETE_ITEM':
 *  //logic
 * return newState
 * }
 */
