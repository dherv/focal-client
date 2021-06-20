import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFocuses } from '../../features/focus/focusActions';
import AddSession from '../base/SessionAdd';
import { SessionList } from '../base/SessionList';

 const PageSession : FC<{ fetchFocuses: () => Promise<any>;}> = ({fetchFocuses}) => {
  useEffect(() => {
    fetchFocuses();
  }, [fetchFocuses]);
  return (
    <section>
      <h4 className="text-sm font-thin mb-2">add a session</h4>
      <AddSession />
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-thin">session list</h4>
      </div>
      <SessionList />
    </section>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFocuses: () => dispatch(fetchFocuses)
  };
};

export default connect(null,mapDispatchToProps)(PageSession)
