import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducers/combined-index";



export const store=createStore(reducer,{},applyMiddleware(thunk));