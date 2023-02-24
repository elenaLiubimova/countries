import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducers";
import { countriesReducer } from "./countries/countriesReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});