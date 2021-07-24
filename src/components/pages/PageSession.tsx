import { FC } from 'react';
import AddSession from '../base/SessionAdd';
import SessionList from '../base/SessionList';

const PageSession: FC = () => {
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

export default PageSession;
