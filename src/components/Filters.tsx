import { FC } from 'react';
import { connect, RootStateOrAny } from 'react-redux';
import { Dispatch } from 'redux';
import { statusFilterChanged } from '../features/focus/focusActions';
import { getCurrentFilter } from '../features/focus/focusReducer';
import { Filter } from './Filter';

export const Filters: FC<{ dispatch: Dispatch; currentFilter: string }> = ({
  dispatch,
  currentFilter,
}) => {
  const handleClick = (filter: string) => {
    dispatch(statusFilterChanged(filter));
  };

  return (
    <ul className="flex items-center text-sm font-thin">
      <Filter filter="all" currentFilter={currentFilter} onClick={handleClick} />
      <Filter filter="completed" currentFilter={currentFilter} onClick={handleClick} />
      <Filter filter="active" currentFilter={currentFilter} onClick={handleClick} />
    </ul>
  );
};

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    currentFilter: getCurrentFilter(state),
  };
};
export default connect(mapStateToProps)(Filters);
