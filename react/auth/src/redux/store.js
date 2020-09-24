import { createStore, combineReducers } from "redux";
import { profileReducer } from "./reducers";

const rootReducers = combineReducers({
  profile: profileReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
