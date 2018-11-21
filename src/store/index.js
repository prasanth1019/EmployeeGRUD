import { createStore,  applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "../reducers";

const initialState = {"userData": [{"Id":null, "Name":"", "City": ""}]}
const cs = applyMiddleware(thunk)(createStore);
export const store = cs(reducer, initialState);
