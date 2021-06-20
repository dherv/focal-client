import { combineReducers } from 'redux';
import focusReducer from '../features/focus/focusReducer';

const appReducer = combineReducers({
  focus: focusReducer,
});

export default appReducer;
