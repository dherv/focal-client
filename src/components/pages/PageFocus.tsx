import { FC } from 'react';
import Filters from '../base/Filters';
import AddFocus from '../base/FocusAdd';
import FocusList from '../base/FocusList';

const PageFocus: FC = () => {
  return (
    <section>
      <h4 className="text-sm font-thin mb-2">add a focus</h4>
      <AddFocus />
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-thin">focus list</h4>
        <Filters />
      </div>
      <FocusList />
    </section>
  );
};

export default PageFocus
