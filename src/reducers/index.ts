import { combineReducers } from 'redux';
import focusReducer from '../features/focus/focusReducer';
import sessionReducer from '../features/session/sessionReducer';
import spotReducer from '../features/spot/spotReducer';
import userReducer from '../features/user/userReducer';

const appReducer = combineReducers({
  focus: focusReducer,
  session: sessionReducer,
  spot: spotReducer,
  user: userReducer,
});

export default appReducer;
