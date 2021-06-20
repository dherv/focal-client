import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFocuses } from './features/focus/focusActions';
import { fetchSessions } from './features/session/sessionAction';

const AppFetcher: FC<{
  fetchFocuses: () => Promise<any>;
  fetchSessions: () => Promise<any>;
}> = ({ fetchFocuses, fetchSessions }) => {
  useEffect(() => {
    fetchFocuses();
    fetchSessions();
  }, [fetchFocuses, fetchSessions]);

  return <></>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFocuses: () => dispatch(fetchFocuses),
    fetchSessions: () => dispatch(fetchSessions),
  };
};

export default connect(null, mapDispatchToProps)(AppFetcher);
