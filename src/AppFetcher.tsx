import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFocuses } from './features/focus/focusActions';
import { fetchSessions } from './features/session/sessionAction';
import { fetchSpots } from './features/spot/spotAction';

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
    fetchSessions: () => dispatch(fetchSessions),
    fetchSpots: () => dispatch({type: 'spots/fetchSpots'}),
  };
};

export default connect(null, mapDispatchToProps)(AppFetcher);
