import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { FETCH_SESSIONS_REQUEST, FETCH_SPOTS_REQUEST } from './actions';
import { fetchFocuses } from './features/focus/focusActions';

const AppFetcher: FC<{
  fetchFocuses: () => Promise<any>;
  fetchSessions: () => Promise<any>;
  fetchSpots: () => Promise<any>;
}> = ({ fetchFocuses, fetchSessions, fetchSpots }) => {
  useEffect(() => {
    fetchFocuses();
    fetchSessions();
    fetchSpots();
  }, [fetchFocuses, fetchSessions, fetchSpots]);

  return <></>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFocuses: () => dispatch(fetchFocuses),
    fetchSessions: () => dispatch({ type: FETCH_SESSIONS_REQUEST }),
    fetchSpots: () => dispatch({ type: FETCH_SPOTS_REQUEST }),
  };
};

export default connect(null, mapDispatchToProps)(AppFetcher);
