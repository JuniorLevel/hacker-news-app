import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import storiesReducer from './storiesReducer';
import themeReducer from './themeReducer';

const rootReducers = combineReducers({
  stories: storiesReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducers,
  devTools: composeWithDevTools(applyMiddleware(thunk)),
});

export default store;
