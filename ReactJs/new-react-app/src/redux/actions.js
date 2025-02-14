export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addToDo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleToDo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
