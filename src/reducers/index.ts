import { combineReducers } from 'redux';
import focusReducer from '../features/focus/focusReducer';
import sessionReducer from '../features/session/sessionReducer';

const appReducer = combineReducers({
  focus: focusReducer,
  session: sessionReducer
});

export default appReducer;
