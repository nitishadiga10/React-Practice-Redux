import { createStore } from "redux";

const userListReducer = (state = { userList: [], error: null }, action) => {
  if (action.type === "add user") {
    return {
      userList: [...state.userList, action.payload],
      error: null,
    };
  }
  if (action.type === "add error") {
    return {
      userList: state.userList,
      error: action.payload,
    };
  }
  if (action.type === "cancel") {
    return {
      userList: state.userList,
      error: null,
    };
  }
  return state;
};

const store = createStore(userListReducer);

export default store;
