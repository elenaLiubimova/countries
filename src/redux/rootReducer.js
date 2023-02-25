import { combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducers";
import { countriesReducer } from "./countries/countriesReducer";
import { controlsReducer } from "./controls/controlsReducer";
import { currentCountryReducer } from "./currentCountry/currentCountryReducers";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  currentCountry: currentCountryReducer,
});