import { createStore, combineReducers } from "redux";

export const initialState = {
  names: ["Martina Venasco", "Casi Ciancimino", "Simona Marchello"],

  count: {
    value: 0,
    default: 100,
  },
};

function countReducer(state = {}, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "MEGA_ULTRA_BIG_RANDOM":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
}

function nameReducer(state = {}, action) {
  switch (action.type) {
    case "AddName":
      return [...state, action.payload];
    case "DeleteName":
      return state.filter(
        (_, index, array) => array[index] !== array[action.payload]
      );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  names: nameReducer,
});
const store = createStore(rootReducer, initialState);

export default store;
