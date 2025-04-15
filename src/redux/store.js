// import classReducer from '@/redux/reducers/classSlice';
import classReducer from './reducers/classSlice';
import userReducer from './reducers/userSlice';
import authReducer from './reducers/authSlice';
import tutorReducer from './reducers/tutorSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  class: classReducer,
  user: userReducer,
  auth: authReducer,
  tutor: tutorReducer
});
export const store = configureStore({
  reducer: reducers,
});
