import { combineReducers } from "redux";
import upload from "./upload";
import Action from "../types/action";

const appReducer = combineReducers({
  upload,
});

export default (state: any, action: Action) => {
  return appReducer(state, action);
};
