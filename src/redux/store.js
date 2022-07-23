import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducer/cartReducer";

const store = createStore(cartReducer, composeWithDevTools(applyMiddleware()));
export default store;
