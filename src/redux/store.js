// import classReducer from '@/redux/reducers/classSlice';
import classReducer from './reducers/classSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  class: classReducer,
});
export const store = configureStore({
  reducer: reducers,
});
