import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import storiesReducer from "./storiesReducer";
import themeReducer from "./themeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  stories: storiesReducer,
  theme: themeReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
