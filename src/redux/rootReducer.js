import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducers";
import { countriesReducer } from "./countries/countriesReducer";
import { controlsReducer } from "./controls/controlsReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
});