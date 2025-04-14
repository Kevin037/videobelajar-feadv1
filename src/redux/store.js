// import classReducer from '@/redux/reducers/classSlice';
import classReducer from './reducers/classSlice';
import userReducer from './reducers/userSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  class: classReducer,
  user: userReducer,
});
export const store = configureStore({
  reducer: reducers,
});
