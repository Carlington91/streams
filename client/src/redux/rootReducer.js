import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
// import { reducer as formReducer } from 'redux-form';
import streamReducer from './streams/streamReducer';

const rootReducer = combineReducers({
  user: authReducer,
  streams: streamReducer,
});

export default rootReducer;
