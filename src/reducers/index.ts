import { combineReducers } from 'redux';
import focusReducer from '../features/focus/focusReducer';
import sessionReducer from '../features/session/sessionReducer';
import spotReducer from '../features/spot/spotReducer';

const appReducer = combineReducers({
  focus: focusReducer,
  session: sessionReducer,
  spot: spotReducer
});

export default appReducer;
