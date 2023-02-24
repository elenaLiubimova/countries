import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducers";

export const rootReducer = combineReducers({
  theme: themeReducer,
});