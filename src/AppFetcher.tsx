import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { FETCH_USER_REQUEST } from './actions';

const AppFetcher: FC<{
  fetchUser: () => Promise<any>;
}> = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <></>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUser: () => dispatch({ type: FETCH_USER_REQUEST }),
  };
};

export default connect(null, mapDispatchToProps)(AppFetcher);
