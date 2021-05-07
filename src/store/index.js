import { createStore } from "redux";
import headerReducer from "./reducer";
const store = createStore(headerReducer)
export default store;